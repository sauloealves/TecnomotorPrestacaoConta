<?php
	include('DBHelper.php');
	$QtdeCartoes = 1;
	
	session_start();

	if ($_SERVER['QUERY_STRING'] != '')
	{
			$matricula = $_SERVER['QUERY_STRING'];
	}
	else
		$matricula = $_SESSION['loginPrestacao'];
		
	$query = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE Matricula = '" . $matricula . "'";
	
	$resultado = mssql_query($query);
	$QtdeCartoes = mssql_num_rows ($resultado);
	
	if ($QtdeCartoes > 1)
	{
		$linha = (mssql_fetch_array($resultado, MSSQL_NUM));
		
		$query = "SELECT * FROM PrestacaoConta..tblCartao WHERE Numero = '".$linha[2]."'";
		$resultado = mssql_query($query);
		$linha = mssql_fetch_array($resultado);
		$pk_usuarioCartao = $linha[0];
	}
	else{
		$linha = mssql_fetch_array($resultado);
		$pk_usuarioCartao = $linha[0];
	}
?>
<!-- aditional stylesheets -->
<!-- responsive table -->
<link href="js/lib/FooTable/css/footable.core.css" rel="stylesheet" type="text/css"/>
<!-- hint.css -->        
<link rel="stylesheet" href="css/hint-css/hint.css">


<script type="text/javascript">
	function callback(r) {
		console.log(JSON.stringify(r));
    }
	var defaults = {
			position: 'top-right', // top-left, top-right, bottom-left, or bottom-right
			speed: 'fast', // animations: fast, slow, or integer
			allowdupes: false, // true or false
			autoclose: 0,  // delay in milliseconds. Set to 0 to remain open.
			classList: '' // arbitrary list of classes. Suggestions: success, warning, important, or info. Defaults to ''.
		};
</script>

<!doctype html>
<html lang="pt-br">
	<?php 
		include ('header.php');
	?>
<body class=" sidebar_hidden side_fixed">
	<div id="wrapper_all">
		
		<?php 
			include ('cabecalhoebro.php');
		?>
		<section class="container clearfix main_section">
			<div id="main_content_outer" class="clearfix">
				<div id="main_content">
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><label id="lblTituloCartao">Lançamentos do cartão: XXXX-XXXX-XXXX-<?php echo $linha[2] ?></label></h4>
								</div>
								<table id="tblLancamento" class="table toggle-square" data-filter="#table_search" data-page-size="10" style="font-size: 13px !important">
									<thead>
										<tr>
											<th>Data</th>
											<th>Descrição</th>
											<th>Valor</th>
											<th>Classificação</th>
											<th>Destino</th>
											<th>C. Custo</th>
											<th>Conta Contábil</th>
											<th>NF/CF/Recibo</th>
											<th>Motivo</th>
										</tr>
									</thead>
									<tbody>
													
								<?php									
									$query = "EXEC PrestacaoConta..SP_RetornaLancamentos ".$pk_usuarioCartao;
									$resultado = mssql_query($query);
									
									if (!mssql_num_rows($resultado))
									{
										echo '<p>Não existem resultados a serem exibidos</p>';
									}
									else
									{
										$linhaTabela = '';
										$total = 0;
										
										
										while($linha = mssql_fetch_array($resultado, MSSQL_NUM))
										{
											$valor = str_replace(",",".",$linha[3]);
											$total = $total + $valor ;
											
											/*$descricao = "";
											if (strlen($linha[7])> 20){
												$descricao = substr($linha[7],0,20)."...";
											}
											else
											{*/
												$descricao = $linha[7];
											//}
											
											$linhaTabela = $linhaTabela.'<tr>';
											$linhaTabela = $linhaTabela."<td>".$linha[1]."</td><td>".$linha[2]."</td><td style='text-align:right'>".$linha[3]."</td>";
											$linhaTabela = $linhaTabela."<td><select id='ddlClassificacao".$linha[0]."' class='form-control' onchange='salvarClassificacao(this, ".$linha[0].")'><option value='".$linha[4]."'>".$linha[5]."</select></td>";
											$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[8]."' id='txtDestino".$linha[0]. "' class='form-control' onblur='salvarDestino(this, ".$linha[0].")'></input></td>";
											$linhaTabela = $linhaTabela."<td><a href='#'><label id='lblCentroCusto".$linha[0]."' data-toggle='tooltip' data-placement='right auto'  title='" .$linha[7]."' onclick='abrirBuscaCentroCusto(".$linha[6].")' >".$linha[6]."</a></label></td>";
											$linhaTabela = $linhaTabela."<td></td>";
											$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[10]."' id='txtRecibo".$linha[0]. "' class='form-control' onblur='salvarRecibo(this, ".$linha[0].")'></input></td>";
											$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[11]."' id='txtMotivo".$linha[0]. "' class='form-control' onblur='salvarMotivo(this, ".$linha[0].")'></input></td>";
											$linhaTabela = $linhaTabela.'</tr>';
										}
										echo $linhaTabela;									
									}
									
								?>
									</tbody>
									<tfoot class="hide-if-no-paging">
										<tr>
											<td colspan="2" style="text-align:right"><b>Total</b></td>
											<?php echo "<td><b>".$total."</b></td>" ?>
										<tr>
											<td colspan="6" class="text-center">
												<ul class="pagination pagination-sm"></ul>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
						<div class="modal fade" id="modalBuscaCentroCusto">
							<div class="modal-dialog" style="width: 70%">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h4 class="modal-title">Busca centro de custo</h4>
									</div>
									<div class="modal-body">
										<table class="table table-striped" id="tblBuscaCentroCusto" style="font-size:12px">
											<thead>
												<tr>
													<th>Centro de Custo</th>
													<th>Descrição</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
											</tbody>
										</table>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<script src="js/lib/FooTable/js/footable.js"></script>
	<script src="js/lib/FooTable/js/footable.sort.js"></script>
	<script src="js/lib/FooTable/js/footable.filter.js"></script>
	<script src="js/lib/FooTable/js/footable.paginate.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/pages/ebro_responsive_table.js"></script>
	<!-- datatables -->
	<script src="js/lib/dataTables/media/js/jquery.dataTables.min.js"></script>

	<link  rel="stylesheet" href="js/lib/dataTables/media/DT_bootstrap.css">
	<link rel="stylesheet" href="js/lib/dataTables/extras/TableTools/media/css/TableTools.css">
	<!-- datatable bootstrap style -->
	<script src="js/lib/dataTables/media/DT_bootstrap.js"></script>

	<script src="js/pages/ebro_datatables.js"></script>
	<script src="js/tecnomotor.js"></script>
	
	<script src="js/typeahead.bundle.js"></script>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	
	<script type="text/javascript">
		
		function abrirBuscaCentroCusto(pk_lancamento){
			$("#modalBuscaCentroCusto").modal('show');
			$.ajax({
				url:retornaUrlPadrao() + "centrocusto.php?listarCentroCusto",
				method: 'POST',
				dataType: 'json',
				data: '',
				success: function(data){

					$("#tblBuscaCentroCusto tbody tr").remove();
					$('#tblBuscaCentroCusto').dataTable().fnClearTable();
					
					var tabela = "";
					for (i = 0; i < data.length; i++){
						
						tabela = "<tr>";
						tabela += "<td>" + data[i].CTT_CUSTO + "</td>";
						tabela += "<td>" + data[i].CTT_DESC01 + "</td>";
						tabela += "<td><input type='button' class='btn btn-primary' value='Selecionar' onclick='mudarcentrocusto('''')'></td>";
						tabela += "</tr>";
						
						$("#tblBuscaCentroCusto tbody").append(tabela);
					}
					
					
					$('#tblBuscaCentroCusto').dataTable({
						"sScrollX": "100%",
						"sScrollXInner": '100%',
						"sPaginationType": "bootstrap",
						"bScrollCollapse": false ,
						"searching" : false,
						"bDestroy": true
					});
				
				},
				error: function(result, b, c){
					alert(result.responseText);
				}
			});
		}
		
		function mudarcentrocusto(centrocusto, pk_lancamento){
			$.ajax({
				url: retornaUrlPadrao() + 'centrocusto.php?mudarcentrocusto',
				data: {'pk_lancamento': pk_lancamento, 'centrocusto' : centrocusto},
				dataType: 'json',
				method: 'POST',
				success: function(data){
					$.stickyNote('Centro de custo salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback);
				}
			});
		}
		
		function salvarDestino(controle, id){
			var destino = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarDestino",
				data: {'destino': destino, 'pk_lancamento': id },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lançamento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				},
				error: function(result,b,c){
					alert(result.responseText);
				}
			});
		}
		
		function salvarRecibo(controle, id){
			var recibo = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarRecibo",
				data: {'recibo': recibo, 'pk_lancamento': id },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lançamento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				},
				error: function(result,b,c){
					alert(result.responseText);
				}
			});
		}
		
		function salvarMotivo(controle, id){
			var motivo = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarMotivo",
				data: {'motivo': motivo, 'pk_lancamento': id },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lançamento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				},
				error: function(result,b,c){
					alert(result.responseText);
				}
			});
		}
		
		
		function salvarDestino(controle, id){
			var destino = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarDestino",

				data: {'destino': destino, 'pk_lancamento': id },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lançamento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				},
				error: function(result,b,c){
					alert(result.responseText);
				}
			});
		}
		
		function salvarClassificacao(controle, id){
			var pk_classificacao = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "classificacao.php?salvar",
				data: {'pk_classificacao': pk_classificacao, 'pk_lancamento': id },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lançamento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		$(function(){
			
			$(document).tooltip();
			
			$.ajax({
				url: retornaUrlPadrao() + "classificacao.php?ListarClassificacao",
				type: 'POST',
				data: '',
				dataType: 'json',
				success: function(data){
					for(i = 0; i < data.length; i++){
						var opcao = "<option value='" +  data[i].PK_Classificacao + "'>" + data[i].Descricao + "</option>";
						var teste = $("#main_content").find("select").each(function(i){
							$(this).append(opcao);
						});
						
					}
				}
			});
			
			var listaCidades = [];
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?SelecionarDestinos",
				data:{},
				dataType: 'json',
				type: 'POST',
				success:function(data){
					for (i = 0; i < data.length; i++){
						listaCidades.push(data[i].Destino);
					}
				}
			});
			
			$("input[id*='txtDestino']").each(function(){
				$(this).autocomplete({
				  source: listaCidades
				});
			});			
			
			var listaMotivo = [];
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?SelecionarMotivos",
				data:{},
				dataType: 'json',
				type: 'POST',
				success:function(data){
					for (i = 0; i < data.length; i++){
						listaMotivo.push(data[i].Motivo);
					}
				}
			});
			
			$("input[id*='txtMotivo']").each(function(){
				$(this).autocomplete({
				  source: listaMotivo
				});
				
			});
			
			//$('[data-toggle="tooltip"]').tooltip();
			
		})
	
	</script>

</body>

</html>