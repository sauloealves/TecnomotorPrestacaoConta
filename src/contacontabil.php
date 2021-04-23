<?php
	
	include ('DBHelper.php');
	
	if ($_SERVER['QUERY_STRING'] == "listarContaContabil")
	{
		$query = $query. "SELECT CT1_CONTA, CT1_DESC01, 100 AS EMPRESA, R_E_C_N_O_ FROM DADOSADV..CT1010  ";
		$query = $query. "UNION ";
		$query = $query. "SELECT CT1_CONTA, CT1_DESC01, 100 AS EMPRESA, R_E_C_N_O_ FROM DADOSADV..CT1100 ";
		$query = $query. "ORDER BY CT1_CONTA ";
		
		$resultado = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($resultado)) {
				$json[] = $row;
			}
		}while(mssql_next_result($resultado));
		
		print_r(json_encode($json));
	}
	
	if ($_SERVER['QUERY_STRING'] == 'mudarcontacontabil'){
		
		$pk_lancamento = $_POST['pk_lancamento'];
		$empresa = $_POST['empresa'];
		$id = $_POST['id']; // ID = R_E_C_N_O_
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'contaContabil')";
		mssql_query($query);
		/* fim LOG */
		
		// Busca a conta contabil pela empresa e R_E_C_N_O_
		if ($empresa == 100)
			$query  = "SELECT CT1_CONTA, CT1_DESC01 FROM DADOSADV..CT1100 WHERE R_E_C_N_O_ = ".$id;
		else
			$query  = "SELECT CT1_CONTA, CT1_DESC01 FROM DADOSADV..CT1010 WHERE R_E_C_N_O_ = ".$id;
		
		$resultado = mssql_query($query);
		$array = mssql_fetch_array($resultado);		
		
		$contacontabil = $array[0];
		$descricaoContaContabil = $array[1];
		$query = "UPDATE PrestacaoConta..tblLancamento SET ContaContabil = '". $contacontabil . "' WHERE PK_Lancamento = ". $pk_lancamento;
		
		mssql_query($query);
		
		// retorna em array a nova contabil e descricao
		$json = array("contaContabil" => $contacontabil, "descricao" => $descricaoContaContabil);
		
		print_r(json_encode($json));
	}

	
?>