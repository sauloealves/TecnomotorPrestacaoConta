<?php
	include('DBHelper.php');
	$QtdeCartoes = 1;
	
	session_start();
	
	$matricula = $_SESSION['loginPrestacao'];
	$empresa = $_SESSION['empresa'];
	$filial = $_SESSION['filial'];
	
	$query = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE MatriculaUsuario = '" . $matricula . "' AND Empresa = '".$empresa."' AND Filial = '".$filial."'";
	//print_r($query);
	//***************************************
	//$fp = fopen("C:\\xampp\\sql.txt", "a");
	//$escreve = fwrite($fp, $query);
	//fclose($fp);	
	//***************************************
	$resultadoQtdeCartoes = mssql_query($query);
	$QtdeCartoes = mssql_num_rows ($resultadoQtdeCartoes);
	
	// Se a qtde de cart�es for zero quer dizer que o usu�rio � somente administrador, sendo transferido para o paineil administrativo
	if ($QtdeCartoes == 0)
	{
		//echo '<META HTTP-EQUIV="Refresh" Content="0; URL=administrador.php">';
	}
	else
	{		
		if ($QtdeCartoes > 1)
		{		
			if ($_SERVER['QUERY_STRING'] != '') 
			{
				$numeroCartao = explode('&',$_SERVER['QUERY_STRING']);
				$dataFatura = explode("/", $numeroCartao[1]);
				
				if (count($dataFatura) > 1)
					$dataFatura = $dataFatura[2] . "-" . $dataFatura[1] . "-" . $dataFatura[0];
				else
					$dataFatura = '';
				
				$numeroCartao = $numeroCartao[0];
			}

			$linha = (mssql_fetch_array($resultadoQtdeCartoes, MSSQL_NUM));
			
			$linhaTemp = $linha;
			
			if ($numeroCartao == null)
				$numeroCartao = $linhaTemp[2];
			
			if ($_SERVER['QUERY_STRING'] != '')
			{				
				$query = "SELECT * FROM PrestacaoConta..tblCartao WHERE Numero = '".$numeroCartao."'";
				
				//Verifica se o usu�rio est� habilitado para acessar os dados do cart�o passado por parametro
				$queryUsuarioPermissao = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE FinalCartao ='".$numeroCartao."' AND MatriculaUsuario = '".$matricula."'";
				$resultadoPermissao = mssql_query($queryUsuarioPermissao);
				
				if (mssql_num_rows($resultadoPermissao) == 0)
					echo '<META HTTP-EQUIV="Refresh" Content="0; URL=error_semacesso.html">';			
			}
			else
			{
				$query = "SELECT * FROM PrestacaoConta..tblCartao WHERE Numero = '".$linha[2]."'";
			}
			$resultado2 = mssql_query($query);
			$linha = mssql_fetch_array($resultado2);
			$pk_usuarioCartao = $linha[0];	
		}
		else{
			
			if ($_SERVER['QUERY_STRING'] != '') 
			{
				$dataFatura = explode("/", $_SERVER['QUERY_STRING']);
				
				if (count($dataFatura) > 1)
					$dataFatura = $dataFatura[2] . "-" . $dataFatura[1] . "-" . $dataFatura[0];
				else
					$dataFatura = '';
				
				$numeroCartao = $numeroCartao[0];		
			}
			else{
				$dataFatura = '';			
			}
			
			$linha = mssql_fetch_array($resultadoQtdeCartoes);
			
			$query = "SELECT * FROM PrestacaoConta..tblCartao WHERE Numero = '".$linha[2]."'";
			$resultado = mssql_query($query);
			
			$linha = mssql_fetch_array($resultado);
			
			$numeroCartao = $linha[1];
			$pk_usuarioCartao = $linha[0];
		}
	}
	
?>
<!-- aditional stylesheets -->
<!-- responsive table -->
<link href="js/lib/FooTable/css/footable.core.css" rel="stylesheet" type="text/css"/>
<!-- hint.css -->        
<link rel="stylesheet" href="css/hint-css/hint.css">
<script src="js/util.js"></script>
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
		<section id="breadcrumbs">
			<div class="container">
				<ul>
					<li><a href="#">Inicio</a></li>
					<li><span>Prestacao</span></li>						
				</ul>
			</div>
		</section>
		
		<section class="container clearfix main_section">
			<div id="main_content_outer" class="clearfix">
				<div id="main_content">
					<?php 						
						echo ("<input type='text' id='txtMatricula' style='display:none;' value='".$matricula."'></input>");
						$addlinha = $addlinha.("<div class='row'>");
						if ($QtdeCartoes > 1){
								$addlinha = $addlinha."<div class='col-sm-6'>";
									$addlinha = $addlinha."<div class='form-group'>";
									$addlinha = $addlinha."<label for='reg_select'>Selecionar outro cartao</label>";
										$addlinha = $addlinha."<select  id='ddlCartoes' class='form-control' onchange='trocarCartao(this)'>";
										$addlinha = $addlinha."<option value='' disabled selected>Selecionar outro cart�o</option>";
										$sql_prop = "SELECT * FROM PrestacaoConta..tblCartao C ";
										$sql_prop = $sql_prop."INNER JOIN PrestacaoConta..tblUsuarioCartao UC ";
										$sql_prop = $sql_prop."	ON C.FK_UsuarioCartao = UC.PK_UsuarioCartao ";
										$sql_prop = $sql_prop."WHERE C.Numero = '".$linhaTemp[2]."'";													
										$r_prop = mssql_query($sql_prop);
										$tabela = mssql_fetch_array($r_prop);
										$addlinha = $addlinha."<option value='".$linhaTemp[2]."'>XXXX-XXXX-XXXX-".$linhaTemp[2]." - 
												".$tabela['Nome']."</option>";
										
										do{
											while ($linha = mssql_fetch_array($resultadoQtdeCartoes)) {
													$sql_prop = "SELECT * FROM PrestacaoConta..tblCartao C ";
													$sql_prop = $sql_prop."INNER JOIN PrestacaoConta..tblUsuarioCartao UC ";
													$sql_prop = $sql_prop."	ON C.FK_UsuarioCartao = UC.PK_UsuarioCartao ";
													$sql_prop = $sql_prop."WHERE C.Numero = '".$linha[2]."'";													
													$r_prop = mssql_query($sql_prop);
													$tabela = mssql_fetch_array($r_prop);

												$addlinha = $addlinha."<option value='".$linha[2]."'>XXXX-XXXX-XXXX-".$linha[2]." - 
												".$tabela['Nome']."</option>";
											}
										}while(mssql_next_result($resultadoQtdeCartoes));
										
										$addlinha = $addlinha."</select>";
										$addlinha = $addlinha."<br/><h4 class='panel-title'><label id='lblProprietarioCartao'></label></b></h4>";
									$addlinha = $addlinha."</div>";
								$addlinha = $addlinha."</div>";							
						}						
						$addlinha = $addlinha."<div class='col-sm-6'>";
							$addlinha = $addlinha."<div class='form-group'>";
							$addlinha = $addlinha."<label for='reg_select'>Seleciona o vencimento da fatura desejada</label>";
								$addlinha = $addlinha."<select  id='ddlFatura' class='form-control' onchange='trocarFatura(this)' >";
								$addlinha = $addlinha."<option value='' disabled selected>Selecionar outra fatura</option>";						
								$addlinha = $addlinha."</select>";
								$addlinha = $addlinha."<br/><h4 class='panel-title'><label id='lblProprietarioCartao'></label></b></h4>";
							$addlinha = $addlinha."</div>";
						$addlinha = $addlinha."</div>";
						
						$addlinha = $addlinha."</div>";// fim da div row pra selecionar carta/fatura
						echo $addlinha;
						
					?>
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><label id="lblTituloCartao">Lan�amentos do cart�o: XXXX-XXXX-XXXX-<?php print_r($numeroCartao) ?></label></h4>	
								</div>
								
								<table id="tblLancamento" class="table table-striped table-condensed" data-filter="#table_search" data-page-size="1000" style="font-size: 13px !important">
									<thead>
										<tr>
											<th>Data</th>
											<th>Descri��o</th>
											<th>Valor</th>
											<th>Classifica��o</th>
											<th>Destino</th>
											<th>Usu�rio</th>
											<th>C. Custo</th>
											<th>Conta Cont�bil</th>
											<th>Participantes/<br/>Acompanhantes</th>
											<th>NF/CF/Recibo</th>
											<th>Motivo</th>
										</tr>
									</thead>
									<tbody>
													
								<?php
									
									if ($QtdeCartoes > 0)
									{										
										if ($dataFatura == '')
											$query = "EXEC PrestacaoConta..SP_RetornaLancamentos ".$pk_usuarioCartao.',NULL';
										else
											$query = "EXEC PrestacaoConta..SP_RetornaLancamentos ".$pk_usuarioCartao.",'".$dataFatura."'";
																				
										$resultado = mssql_query($query);
										
										if (!mssql_num_rows($resultado))
										{
											echo '<p>N�o existem resultados a serem exibidos</p>';
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
												$linhaTabela = $linhaTabela."<td><input type='text' style='display:none;' id='txtId' value='".$linha[0]."'></input>".$linha[1]."</td><td>".$linha[2]."</td><td style='text-align:right'>".$linha[3]."</td>";
												$linhaTabela = $linhaTabela."<td><select id='ddlClassificacao".$linha[0]."' class='form-control' onchange='salvarClassificacao(this, ".$linha[0].")'><option value='".$linha[4]."'>".$linha[5]."</select><div class='hospedagem".$linha[0]."' style='display:none;'>Diarias:<input type='number' value='".$linha[15]."' onkeypress='return event.charCode >= 48 && event.charCode <= 57' id='txtDiarias".$linha[0]. "' class='form-control' onblur='salvarDiarias(this, ".$linha[0].")'></input>Lavanderia:<input type='number' onkeypress='return event.charCode >= 48 && event.charCode <= 57' value='".$linha[16]."' id='txtLavanderia".$linha[0]. "' class='form-control' onblur='salvarLavanderia(this, ".$linha[0].")'></input>Refei��es: <input type='number' value='".$linha[17]."' onkeypress='return event.charCode >= 48 && event.charCode <= 57' id='txtRefeicoes".$linha[0]. "' class='form-control' onblur='salvarRefeicoes(this, ".$linha[0].")'></input></div><div class='alimentacao".$linha[0]."' style='display:none;'>Cliente: <input type='textbox' value='".$linha[18]."' id='txtClientes".$linha[0]. "' class='form-control' onblur='salvarClientes(this, ".$linha[0].")'></input></div></td>";
												$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[8]."' id='txtDestino".$linha[0]. "' class='form-control' onblur='salvarDestino(this, ".$linha[0].")'></input></td>";
												$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[13]."' id='txtUsuario".$linha[0]. "' class='form-control' onblur='salvarUsuario(this, ".$linha[0].")'></input></td>";
												
												$linhaTabela = $linhaTabela."<td><input type='textbox' id='lblCentroCusto".$linha[0]."' data-toggle='tooltip' data-placement='right auto' onblur='salvarCentroCusto(this, ".$linha[0].")' class='form-control' value='".$linha[6]."' title='" .$linha[7]."'></input>
												<button class='form-control' onclick='abrirBuscaCentroCusto(".$linha[0].")'>Buscar</button></td>";

												$linhaTabela = $linhaTabela."<td><a href='#'><label id='lblContaContabil".$linha[0]."' data-toggle='tooltip' data-placement='right auto'  title='" .$linha[12]."' onclick='abrirBuscaContaContabil(".$linha[0].")' >".$linha[9]."</a></label></td>";
												$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[14]."' id='txtAcompanhante".$linha[0]. "' class='form-control' onblur='salvarAcompanhante(this, ".$linha[0].")'></input></td>";
												$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[10]."' id='txtRecibo".$linha[0]. "' class='form-control' onblur='salvarRecibo(this, ".$linha[0].")'></input></td>";
												$linhaTabela = $linhaTabela."<td><input type='textbox' value='".$linha[11]."' id='txtMotivo".$linha[0]. "' class='form-control' onblur='salvarMotivo(this, ".$linha[0].")'></input></td>";																																				
												$linhaTabela = $linhaTabela.'</tr>';
											}
											echo $linhaTabela;									
										}
									}
								?>
									<tr>
										<td colspan="2" style="text-align:right"><b>Total</b></td>
										<?php echo "<td><b>".$total."</b></td>" ?>
									</tr>
									</tbody>
									<tfoot class="hide-if-no-paging">										
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
													<th>Descri��o</th>
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
						<div class="modal fade" id="modalBuscaContaContabil">
							<div class="modal-dialog" style="width: 70%">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										<h4 class="modal-title">Busca conta cont�bil</h4>
									</div>
									<div class="modal-body">
										<table class="table table-striped" id="tblBuscaContaContabil" style="font-size:12px">
											<thead>
												<tr>
													<th>Contas</th>
													<th>Descri��o</th>
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
						<div class="col-sm-12">
							<?php echo("<td colspan='4'><label id='lblImpressao'><a href='#' onclick='imprimir()'>Vers�o para impress�o</a><label></td>") ?>
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
	<!-- datatable fixed columns -->
	<script src="js/lib/dataTables/extras/FixedColumns/media/js/FixedColumns.min.js"></script>
	
	<script src="js/tecnomotor.js"></script>
	
	<script src="js/typeahead.bundle.js"></script>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	<script src="js/tecnomotor.js"></script>	
	

	<script type="text/javascript">
		
		function imprimir(){
			var cartao = $("#lblTituloCartao").text();
			cartao = cartao.substring(cartao.length -4,cartao.length);			
			window.open(retornaUrlPadrao() + 'impressaoPrestacao.php?' + cartao + "&" + $("#ddlFatura").val());
		}
		
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
						tabela += "<td><input type='button' class='btn btn-primary' value='Selecionar' onclick='mudarcentrocusto(" + data[i].EMPRESA + "," + data[i].R_E_C_N_O_ + ", " + pk_lancamento + ")'></td>";
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
				
				}
			});
		}		
		
		function abrirBuscaContaContabil(pk_lancamento){
			
			$("#modalBuscaContaContabil").modal('show');
			
			$.ajax({
				url:retornaUrlPadrao() + "contacontabil.php?listarContaContabil",
				method: 'POST',
				dataType: 'json',
				data: '',
				success: function(data){

					$("#tblBuscaContaContabil tbody tr").remove();
					$('#tblBuscaContaContabil').dataTable().fnClearTable();
					
					var tabela = "";
					for (i = 0; i < data.length; i++){
						
						tabela = "<tr>";
						tabela += "<td>" + data[i].CT1_CONTA + "</td>";
						tabela += "<td>" + data[i].CT1_DESC01 + "</td>";
						tabela += "<td><input type='button' class='btn btn-primary' value='Selecionar' onclick='mudarcontacontabil(" + data[i].EMPRESA + "," + data[i].R_E_C_N_O_ + ", " + pk_lancamento + ")'></td>";
						tabela += "</tr>";
						
						$("#tblBuscaContaContabil tbody").append(tabela);
					}
										
					$('#tblBuscaContaContabil').dataTable({
						"sScrollX": "100%",
						"sScrollXInner": '100%',
						"sPaginationType": "bootstrap",
						"bScrollCollapse": false ,
						"searching" : false,
						"bDestroy": true
					});
				
				}
			});
		}		
		
		function mudarcontacontabil(empresa, id, pk_lancamento){
			$.ajax({
				url: retornaUrlPadrao() + 'contacontabil.php?mudarcontacontabil',
				data: {'pk_lancamento': pk_lancamento, 'empresa' : empresa, 'id': id, 'matricula': $("#txtMatricula").val()},
				dataType: 'json',
				method: 'POST',
				success: function(data){
					$.stickyNote('Conta cont�bil salva com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback);
					$("#modalBuscaContaContabil").modal('hide');
					$("#lblContaContabil" + pk_lancamento).text(data.contaContabil);
					$("#lblContaContabil" + pk_lancamento).attr("title", data.descricao);
				},
				error: function(result, b, c){
					alert(result.responseText);
				}
			});
		}
		
		function mudarcentrocusto(empresa, id, pk_lancamento){
			$.ajax({
				url: retornaUrlPadrao() + 'centrocusto.php?mudarcentrocusto',
				data: {'pk_lancamento': pk_lancamento, 'empresa' : empresa, 'id': id, 'matricula': $("#txtMatricula").val()},
				dataType: 'json',
				method: 'POST',
				success: function(data){
					$.stickyNote('Centro de custo salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback);
					$("#modalBuscaCentroCusto").modal('hide');
					$("#lblCentroCusto" + pk_lancamento).val(data.centroCusto);
					$("#lblCentroCusto" + pk_lancamento).attr("title", data.descricao);
				},
				error: function(result, b, c){
					alert(result.responseText);
				}
			});
		}
		
		function salvarClientes(controle, id){
			var cliente = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarClientes",
				data: {'cliente': cliente, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
				
		function salvarRecibo(controle, id){
			var recibo = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarRecibo",
				data: {'recibo': recibo, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarDiarias(controle, id){
			var diarias = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarDiarias",
				data: {'diarias': diarias, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarLavanderia(controle, id){
			var lavanderia = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarLavanderia",
				data: {'lavanderia': lavanderia, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarRefeicoes(controle, id){
			var refeicoes = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarRefeicoes",
				data: {'refeicoes': refeicoes, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarCentroCusto(controle, id){
			var centrocusto = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarCentroCusto",
				data: {'centrocusto': centrocusto, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}

		function salvarUsuario(controle, id){
			var usuario = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarUsuario",
				data: {'usuario': usuario, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarAcompanhante(controle, id){
			var acompanhante = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarAcompanhante",
				data: {'acompanhante': acompanhante, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}		
		
		function salvarMotivo(controle, id){
			var motivo = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarMotivo",
				data: {'motivo': motivo, 'pk_lancamento': id, 'matricula' : $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
		
		function salvarDestino(controle, id){
			var destino = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?salvarDestino",
				data: {'destino': destino, 'pk_lancamento': id, "matricula": $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
		}
				
		function salvarClassificacao(controle, id){
			var pk_classificacao = $(controle).val();
			
			$.ajax({
				url: retornaUrlPadrao() + "classificacao.php?salvar",
				data: {'pk_classificacao': pk_classificacao, 'pk_lancamento': id, 'matricula': $("#txtMatricula").val() },
				method: 'POST',
				dataType: 'json',
				success: function(data){
					$.stickyNote('Lan�amento salvo com sucesso.', $.extend({}, defaults, {autoclose: 2000, classList: 'stickyNote-success',position: 'top-center'}), callback)               
				}
			});
			
			$('.alimentacao'+id).css('display','none');
			$('.hospedagem'+id).css('display','none');
			
			if (pk_classificacao == 3)//hotel
				$('.hospedagem'+id).css('display','inline-block');
				
			else{
				if (pk_classificacao == 2 || pk_classificacao == 15 || pk_classificacao == 14 || pk_classificacao == 16 || pk_classificacao == 17){
					$('.alimentacao'+id).css('display','inline-block');
				}
			}
				
		}
		
		function trocarCartao(controle){
			window.location = retornaUrlPadrao() + 'prestacao.php?' + $(controle).val();
		}
		
		function trocarFatura(controle){
			if (($("#ddlCartoes").val() == null) == true)
				window.location = retornaUrlPadrao() + 'prestacao.php?' + $(controle).val();
			else
				window.location = retornaUrlPadrao() + 'prestacao.php?' + $("#ddlCartoes").val() + "&" + $(controle).val();
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
						$("select[id*='ddlClassificacao']").each(function(i){
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
			var cartao = $("#lblTituloCartao").text();
			cartao = cartao.substring(cartao.length -4,cartao.length);
			$("#ddlCartoes").val(cartao);
			
			$.ajax({
				url: retornaUrlPadrao() + "UsuarioCartao.php?ProprietarioCartao",
				dataType: 'JSON',
				data: {'cartao': cartao },
				type: 'POST',
				success: function(data){
					$("#lblProprietarioCartao").text(data);
				},
				error: function (result, b,c){
					$("#lblProprietarioCartao").text("Propriet�rio do cart�o: " + result.responseText);
				}
			});
			
			$.ajax({
				url: retornaUrlPadrao() + "lancamento.php?SelecionarDatasVencimento",
				data: {'cartao': cartao },
				dataType: 'JSON',
				type: 'POST',
				success: function(data){
					var addlinha = "";
					for(i = 0; i < data.length; i++){
						datas = converterDataJson(data[i].DataVencimentoFatura);
						addlinha += "<option value='" + datas + "'>" + datas + "</option>";
					}
					
					$("#ddlFatura").append(addlinha);
					$("#ddlFatura").prop('selectedIndex',1);
				
					var url = document.URL;
					
					if (($("#ddlCartoes").val() == null) == true){ // caso seja usuario de um cartao s�
						faturaSelecionada = url.split("?");
						if (faturaSelecionada.length > 1)
							$("#ddlFatura").val(faturaSelecionada[1]);
					}else{ // caso o usuario tenha acesso a mais de um cartao				
						faturaSelecionada = url.split("&");
						if (faturaSelecionada.length > 1)
							$("#ddlFatura").val(faturaSelecionada[1]);
						
					}
				},
				error: function(result, b, c){
					
				}
			});
			//alert($('#tblLancamento'));
			
			/*if($('#tblLancamento').length) {
                var oTable = $('#tblLancamento').dataTable( {
					"sScrollX": "100%",
					"sScrollXInner": "150%",
					"bScrollCollapse": true
				} );
				new FixedColumns( oTable, {
					"iLeftColumns": 2,
					"iLeftWidth": 200
				} );
            }*/
			
			$("#tblLancamento tr").each(function(){
				var id =0;
				
				$(this).find('input[type="text"]').each(function(){
						id = $(this).val();
				});
				
				var classificacao = $(this).find('select').val();
				if (classificacao == 3){
					$('.hospedagem'+id).css('display','inline-block');
				}else
				{
					if (classificacao == 2 || classificacao == 15 || classificacao == 14 || classificacao == 16 || classificacao == 17)
					{
						$('.alimentacao'+id).css('display','inline-block');
					}
				}
			});
			
		})
	
	</script>

</body>

</html>