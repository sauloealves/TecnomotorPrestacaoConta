<?php
	
	include ('DBHelper.php');
	
	if ($_SERVER['QUERY_STRING'] == "listarCentroCusto")
	{
		$query = $query. "SELECT CTT_CUSTO, CTT_DESC01, 100 AS EMPRESA, R_E_C_N_O_ FROM DADOSADV..CTT100 ";
		$query = $query. "WHERE CTT_FILIAL = '' ";
		$query = $query. "UNION ";
		$query = $query. "SELECT CTT_CUSTO, CTT_DESC01, 10 AS EMPRESA, R_E_C_N_O_  FROM DADOSADV..CTT010 ";
		$query = $query. "ORDER BY CTT_DESC01 ";
		
		$resultado = mssql_query($query);
		
		$json = array();
		
		do{
			while ($row = mssql_fetch_array($resultado)) {
				$json[] = $row;
			}
		}while(mssql_next_result($resultado));
		
		print_r(json_encode($json));
	}
	
	if ($_SERVER['QUERY_STRING'] == 'mudarcentrocusto'){
		
		$pk_lancamento = $_POST['pk_lancamento'];
		$empresa = $_POST['empresa'];
		$id = $_POST['id']; // ID = R_E_C_N_O_
		
		/* LOG */
		$matricula = $_POST['matricula'];
		$hoje = getdate();
		$hoje = $hoje['year'].'-'.$hoje['mon'].'-'.$hoje['mday'].' '.$hoje['hours'].':'.$hoje['minutes'].':'.$hoje['seconds'];
		$query = "INSERT INTO PrestacaoConta..tblLogLancamento VALUES('".$matricula."',".$pk_lancamento.",'".$hoje."', 'centroCusto')";
		mssql_query($query);
		/* fim LOG */
		
		// Busca o centro de custo pela empresa e R_E_C_N_O_
		if ($empresa == 100)
			$query  = "SELECT CTT_CUSTO, CTT_DESC01 FROM DADOSADV..CTT100 WHERE CTT_FILIAL = '' AND R_E_C_N_O_ = ".$id;
		else
			$query  = "SELECT CTT_CUSTO, CTT_DESC01 FROM DADOSADV..CTT010 WHERE R_E_C_N_O_ = ".$id;
		
		$resultado = mssql_query($query);
		$array = mssql_fetch_array($resultado);		
		
		$centrocusto = $array[0];
		$descricaoCentroCusto = $array[1];
		$query = "UPDATE PrestacaoConta..tblLancamento SET CentroCusto = '". $centrocusto . "' WHERE PK_Lancamento = ". $pk_lancamento;
		
		mssql_query($query);
		
		// retorna em array o novo centro de custo e descricao
		$json = array("centroCusto" => $centrocusto, "descricao" => $descricaoCentroCusto);
		
		print_r(json_encode($json));
	}

	
?>