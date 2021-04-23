<?php
	include('DBHelper.php');
	session_start();
	
	$matricula = $_SESSION['loginPrestacao'];
	$empresa = $_SESSION['empresa'];
	$filial = $_SESSION['filial'];
	
	//$query = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE MatriculaUsuario = '" . $matricula . "' AND Empresa = '".$empresa."' AND Filial = '".$filial."'";
	//$resultado = mssql_query($query);	

	//Verifica se o usuÃ¡rio estÃ¡ habilitado para acessar os dados do cartÃ£o passado por parametro
	$queryUsuarioPermissao = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE FinalCartao ='".$numeroCartao."' AND Matricula = '".$matricula."'";
	$resultadoPermissao = mssql_query($queryUsuarioPermissao);
	
	//if (mssql_num_rows($resultadoPermissao) == 0)
	//	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=error_semacesso.html">';			
	
	//if ($_SERVER['QUERY_STRING'] == '')
	//	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=login.php">';			
	//else
	//{
	$parametros = $_SERVER['QUERY_STRING'];
	$parametros = explode("&", $parametros);
	$numeroCartao = $parametros[0];
	$dataFatura = $parametros[1];
	$dataFatura = explode("/", $dataFatura);
		
	if (count($dataFatura) > 1)
		$dataFatura = $dataFatura[2] . "-" . $dataFatura[1] . "-" . $dataFatura[0];
	else
		$dataFatura = '';
	
	$query = "SELECT * FROM PrestacaoConta..tblCartao C INNER JOIN PrestacaoConta..tblUsuarioCartao UC ON C.FK_UsuarioCartao = UC.PK_UsuarioCartao  WHERE Numero = '".$numeroCartao."'";
	$resultado2 = mssql_query($query);
	$linha = mssql_fetch_array($resultado2);
	$pk_usuarioCartao = $linha[0];

	$query = "SELECT * FROM PrestacaoConta..tblUsuarioCartao A INNER JOIN PrestacaoConta..tblCartao b ON A.FinalCartao = b.Numero AND A.PK_UsuarioCartao = B.FK_UsuarioCartao AND A.FinalCartao = ". $numeroCartao;
	$resultado = mssql_query($query);
	$resultado = mssql_fetch_array($resultado);
	//}
			
?>

<!doctype html>
<html lang="pt-br">
	<head>
		<meta charset="Content-Type: text/html; charset=UTF-8">
		<title>Impressao prestacao de conta</title>
		<script src="js/jquery.min.js"></script>

		<style type="text/css">
		@media print {
			
			table, tr, td {
			   border-bottom: 1px solid white;
			   
			   -webkit-print-color-adjust: exact;
			}
		}
		
		#footer {
		   position:absolute;
		   bottom:0;
		   width:100%;
		   height:60px;   /* Height of the footer */
		}
			
		</style>
		
		<script type="text/javascript">
			$(function(){
				window.print();
			});
		</script>
		
		
	</head>
	<body>
		<div class="row">
			<div class="row">
				<div class="col-xs-6 col-sm-4">
					<img src="img/tecnomotor.png" style='max-height:50px' alt="">
				</div>
				<div class="col-xs-6 col-sm-8">
					Fatura de Cartao
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h4 class="panel-title"><label id="lblTituloCartao">Lancamentos do cartao: XXXX-XXXX-XXXX-<?php print_r($numeroCartao) ?>&nbsp;-&nbsp;<?php print_r($resultado[1]) ?></label></h4>
						</div>
						
						<table id="tblLancamento" class="table toggle-square" data-filter="#table_search" data-page-size="10" style="font-size: xx-small !important; border: solid 1px">
							<thead>
							<tr><td colspan="11" style='background-color:#660000; color:white;text-align:center'>Despesas pagas com CARTAO DE CREDITO</td></tr>
								<tr style="background-color:#A0A0A0; color:white">
									<th>Data</th>
									<!--<th>Descricao</th>!-->
									<th>Valor</th>
									<th>Classificacao</th>
									<th>Destino</th>
									<th>Usuario</th>
									<th>C. Custo</th>
									<th>Conta Contabil</th>
									<th>Participantes/<br/>Acompanhantes</th>
									<th>NF/CF/Recibo</th>
									<th>Motivo</th>
									<th>Observacoes</th>
								</tr>
							</thead>
							<tbody>
											
							<?php
							if ($dataFatura == '')
								$query = "EXEC PrestacaoConta..SP_RetornaLancamentos ".$pk_usuarioCartao.',NULL';
							else
								$query = "EXEC PrestacaoConta..SP_RetornaLancamentos ".$pk_usuarioCartao.",'".$dataFatura."'";
							
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
									$descricao = $linha[7];
									$linhaTabela = $linhaTabela.'<tr style="background-color: #e0e0e0 !important;">';
									$linhaTabela = $linhaTabela."<td>".$linha[1]."</td>";
									//$linhaTabela = $linhaTabela."<td>".$linha[2]."</td>";
									$linhaTabela = $linhaTabela."<td style='text-align:right'>".$linha[3]."</td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[5]."</td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[8]."</label></td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[13]."</label></td>"; // Usuario
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[6]."</label></td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[9]."</label></td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[14]."</label></td>";// Acompanhantes
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[10]."</label></td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[11]."</label></td>";
									$linhaTabela = $linhaTabela."<td><label class='form-control'>".$linha[19]."</label></td>";
									$linhaTabela = $linhaTabela.'</tr>';
								}
								echo $linhaTabela;									
							}
							
						?>
							</tbody>
							<tfoot class="hide-if-no-paging">
								<tr>
									<td colspan="9" style="text-align:right"><b>Total de despeas com cartao de credito</b></td>
									<?php echo "<td style='text-align:right'><b>".$total."</b></td>" ?>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
		<br/>
		<br/>
		<div class="row">
			<div class="col-xs-12>
				<div id="footer" style="text-align:center !important">
								
					__________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;___________________<br/>
					Visto Solicitante&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Visto Gestor
				</div>
			</div>
		</div>
	</body>
</html>