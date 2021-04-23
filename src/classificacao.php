<?php
	include ('DBHelper.php');
	
	if ($_SERVER['QUERY_STRING'] == 'ListarClassificacao')
	{
		$query = 'SELECT PK_Classificacao, Descricao FROM PrestacaoConta..tblClassificacao ORDER BY Descricao';
		$resultado = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($resultado)) {
				$row['Descricao'] = utf8_encode($row['Descricao']);
				$json[] = $row;
			}
		}while(mssql_next_result($resultado));
		
		print_r(json_encode($json));	
	}
	
	if ($_SERVER['QUERY_STRING'] == 'salvar')
	{
		$pk_lancamento = $_POST['pk_lancamento'];
		$pk_classificacao = $_POST['pk_classificacao'];
		
		/* LOG */
		$matricula = $_POST['matricula'];		
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'salvarClassificacao')";
		mssql_query($query);
		/* fim LOG */
		
		$query = 'UPDATE PrestacaoConta..tblLancamento SET FK_Classificacao = '. $pk_classificacao.' WHERE PK_Lancamento = '.$pk_lancamento;
		
		$resultado = mssql_query($query);

		echo $resultado;
		
	}
?>