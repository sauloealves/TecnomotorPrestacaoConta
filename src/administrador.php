<?php
    session_start();
?>
<!doctype html>
<html lang="pt-br">
	
    <?php include ('header.php'); ?>
	
	<!-- datatables -->
	<script src="js/lib/dataTables/media/js/jquery.dataTables.min.js"></script>
	<link rel="stylesheet" href="js/lib/dataTables/media/DT_bootstrap.css">
	<link rel="stylesheet" href="js/lib/dataTables/extras/TableTools/media/css/TableTools.css">
	<script src="js/pages/ebro_datatables.js"></script>
	<script src="js/lib/dataTables/media/DT_bootstrap.js"></script>
	
    <body class=" sidebar_hidden side_fixed">
       <?php include('cabecalhoebro.php') ?>
	   <section id="breadcrumbs">
			<div class="container">
				<ul>
					<li><a href="#">Inicio</a></li>
					<li><span>Administrador</span></li>						
				</ul>
			</div>
		</section>
	   <div id="wrapper_all">
          <section class="container clearfix main_section">
			<div id="main_content_outer" class="clearfix">
				<div id="main_content"> 
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-default">
								<div class="panel-heading">
									<h4 class="panel-title"><label id="lblTituloCartao">Selecione o cartao</label></h4>	                                
								</div>
								<div class="panel-body">
									<input type="text" id="txtFatura" style="display:none;" />
									<select  id='ddlFatura' class='form-control' onchange='trocarFatura(this)'></select>
									<br/>
									<br/>
									<div class="modal-body">
										<table id="tblFuncionarioAcesso" class="table table-striped table-condensed" data-filter="#table_search" data-page-size="1000" style="font-size: 13px !important">
											<thead>
												<tr>
													<th>Funcionario</th>
													<th>Matricula</th>
													<th>Acesso</th>                                                        
												</tr>
											</thead>
											<tbody>
											</tbody>
										</table>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
           </section>
        </div>
    </body>
    
	<!-- hint.css -->        
	<link rel="stylesheet" href="css/hint-css/hint.css">
    <script src="js/tecnomotor.js"></script>
    <script src="js/config.js"></script>        
<!-- todc-bootstrap -->
		<link rel="stylesheet" href="css/todc-bootstrap.min.css">

	<!-- bootstrap switch -->
	<link rel="stylesheet" href="js/lib/bootstrap-switch/stylesheets/bootstrap-switch.css">
	<link rel="stylesheet" href="js/lib/bootstrap-switch/stylesheets/ebro_bootstrapSwitch.css">
	<!-- bootstrap switch -->

		<script src="js/lib/bootstrap-switch/js/bootstrap-switch.min.js"></script>
    <script type="text/javascript">
        
        // popula a combo de cartão com os cartões cadastrados
        $(function(){		
            $.ajax({
                url: retornaUrlPadrao() +"UsuarioCartao.php?SelecionarCartoes",
                data:{},
                type: "POST",
                dataType: 'json',
                success: function(data){
                    var linha = "<option value='' disabled selected>Selecionar cartao</option>";
                    for (i = 0; i < data.length; i++)  {
                        linha += "<option value='" + data[i].Numero + "'>" + data[i].Descricao + "</option>"
                    }
                    
                    $("#ddlFatura").append(linha);
                },
                error: function(result,b,c){
                    alert(result.responseText);
                }
            })
        });
        
        function trocarFatura(controle){
            
			var fatura = $(controle).val();
			$("#txtFatura").val(fatura);
			
			
			$.ajax({
				url: retornaUrlPadrao() + "UsuarioCartao.php?ListarUsuariosAcesso",
				data: {'cartao': fatura},
				dataType: 'json',
				type:'POST',
				success: function(data){
					
					$("#tblFuncionarioAcesso tbody tr").remove();
					$('#tblFuncionarioAcesso').dataTable().fnClearTable();
					
					var linha = "";
					
					for(i = 0; i < data.length; i++){
						linha+= "<tr><td>" + data[i].RA_NOME + "</td><td>" + data[i].RA_MAT + "</td><td>";
						if (data[i].Acesso == "1")
							linha+= "<input type='checkbox' id='" + data[i].RA_MAT + "' onchange='alterarAcesso(this)' checked>";
						else
							linha+= "<input type='checkbox' id='" + data[i].RA_MAT + "' onchange='alterarAcesso(this)'>";
						linha+="</td></tr>"
					}
					
					$("#tblFuncionarioAcesso tbody").append(linha);
					
					$('#tblFuncionarioAcesso').dataTable({
						"sScrollX": "100%",
						"sScrollXInner": '100%',
						"sPaginationType": "bootstrap",
						"bScrollCollapse": false ,
						"searching" : false,
						"bDestroy": true
					});
				},

				error: function(result,b,c){
					alert(result.responseText);
				}	
			})
        }
		
		function alterarAcesso(controle){
			
			var matricula = $(controle).attr('id');
			if(controle.checked)
				var checado = 'insere';
			else
				var checado = 'exclui';
			
			var cartao = $("#txtFatura").val();
			
			$.ajax({
				url: retornaUrlPadrao() + "UsuarioCartao.php?AlterarAcessoUsuario",
				data: {'matricula': matricula, 'checado': checado, 'fatura': cartao},
				dataType:'json',
				type:'POST',
				success: function(data){
					alert(data);
				},
				error: function(result,b,c){
					alert(result.responseText);
				}
			});
		}
    </script>
</html>