<?php

	include ("Util.php");
	include ("DBHelper.php");
	
	if ($_SERVER['QUERY_STRING'] == 'SelecionarDestinos')
	{
		$query = "SELECT DISTINCT Destino  ";
		$query = $query . 'FROM PrestacaoConta..tblLancamento ';
						
		$strconn = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($strconn)) {
				$row['Destino'] = utf8_encode($row['Destino']);
				$json[] = $row;
			}
		}while(mssql_next_result($strconn));
		
		print_r(json_encode($json));
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarDestino')
	{
		$destino = $_POST["destino"];
		$pk_lancamento = $_POST['pk_lancamento'];
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarDestino')";
		mssql_query($query);
		/* fim LOG */
		
		$destino = RemoveAcentos($destino);
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Destino = '".$destino."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarDiarias')
	{
		$diarias = $_POST["diarias"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$diarias = RemoveAcentos($diarias);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Diarias = '".$diarias."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarClientes')
	{
		$cliente = $_POST["cliente"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$cliente = RemoveAcentos($cliente);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Cliente = '".$cliente."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarLavanderia')
	{
		$lavanderia = $_POST["lavanderia"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$lavanderia = RemoveAcentos($lavanderia);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Lavanderia = '".$lavanderia."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarRefeicoes')
	{
		$refeicoes = $_POST["refeicoes"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$refeicoes = RemoveAcentos($refeicoes);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Refeicoes = '".$refeicoes."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}

	if ($_SERVER['QUERY_STRING'] == 'salvarCentroCusto')
	{
		$centrocusto = $_POST["centrocusto"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$centrocusto = RemoveAcentos($centrocusto);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET CentroCusto = '".$centrocusto."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}	
	
	if ($_SERVER['QUERY_STRING'] == 'salvarRecibo')
	{
		$recibo = $_POST["recibo"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$recibo = RemoveAcentos($recibo);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarRecibo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET NFRecibo = '".$recibo."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarUsuario')
	{
		$usuario = $_POST["usuario"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$usuario = RemoveAcentos($usuario);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarUsuario')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET UsuarioCartao = '".$usuario."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvarAcompanhante')
	{
		$acompanhante = $_POST["acompanhante"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$acompanhante = RemoveAcentos($acompanhante);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarAcompanhante')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET Acompanhante = '".$acompanhante."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	
	if ($_SERVER['QUERY_STRING'] == 'salvarMotivo')
	{
		$motivo = $_POST["motivo"];
		$pk_lancamento = $_POST['pk_lancamento'];
		$motivo = RemoveAcentos($motivo);
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarMotivo')";
		mssql_query($query);
		/* fim LOG */
		
		$query = "UPDATE PrestacaoConta..tblLancamento SET MotivoViagem = '".$motivo."' WHERE PK_Lancamento = ".$pk_lancamento;
		
		mssql_query($query);
		
		print_r('true');
	}
	
	if ($_SERVER['QUERY_STRING'] == 'SelecionarMotivos')
	{
		$query = "SELECT DISTINCT MotivoViagem as Motivo  ";
		$query = $query . 'FROM PrestacaoConta..tblLancamento ';
						
		$strconn = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($strconn)) {
				$row['Motivo'] = utf8_encode($row['Motivo']);
				$json[] = $row;
			}
		}while(mssql_next_result($strconn));
		
		print_r(json_encode($json));
	}

	// Função que retorna somente as diferentes faturas de um cartão passado como parametro
	if  ($_SERVER['QUERY_STRING'] == 'SelecionarDatasVencimento')
	{
		$cartao = $_POST['cartao'];
		$query = "SELECT PK_Cartao FROM PrestacaoConta..tblCartao WHERE Numero = '".$cartao."'";
		
		$resultado = mssql_query($query);
		$array = mssql_fetch_array($resultado, MSSQL_NUM);
		$pk_cartao = $array[0];
		
		$query = "SELECT DISTINCT DataVencimentoFatura FROM PrestacaoConta..tblLancamento WHERE FK_Cartao = ".$pk_cartao.' ORDER BY DataVencimentoFatura DESC';
		$resultado = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($resultado)) {
				$row['DataVencimentoFatura'] = utf8_encode($row['DataVencimentoFatura']);
				$json[] = $row;
			}
		}while(mssql_next_result($resultado));		
		
		print_r(json_encode($json));
	}
?>
