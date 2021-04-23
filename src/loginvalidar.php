<?php
	include('DBHelper.php');
	
	$querystring = $_SERVER['QUERY_STRING'];
	$matricula = explode("&",$querystring);
	$matricula = explode("=",$matricula[0]);
	$senha = explode("&",$querystring);
	$senha = explode("=",$senha[1]);
	
	$query = "EXEC PrestacaoConta..sp_LoginVerificar '" .  $matricula[1] . "' , '" . $senha[1] ."'";
	
	//print_r(json_encode($query));
	$strconn = mssql_query($query);
	$dadoslogin = mssql_fetch_array($strconn);
		
	if (!mssql_num_rows($strconn))
		print_r('false');
	else
	{
		// Verificar se a matricula informada estс na tabela de prestacao de contas
		$query = "SELECT * FROM PrestacaoConta..tblUsuarioCartao WHERE MatriculaUsuario = '" . $matricula[1] . "'";
		$strconn = mssql_query($query);
		
		if (!mssql_num_rows($strconn))
		{
			// Se o usuario nao estiver habilitado para lanчar prestaчуo de conta mas for um administrador faz login
			$query = "SELECT * FROM PrestacaoConta..tblAdministrador WHERE Matricula = '" . $matricula[1] . "'";
			$strconn = mssql_query($query);
			if (!mssql_num_rows($strconn))
				print_r('false');	
			else{
				session_start();
				
				$_SESSION['loginPrestacao'] = $matricula[1];
				$_SESSION['filial'] = $dadoslogin[2];
				$_SESSION['empresa'] = $dadoslogin[4];
				
				print_r('true');	
			}
		}
		else
		{
			session_start();
			$_SESSION['loginPrestacao'] = $matricula[1];
			$_SESSION['filial'] = $dadoslogin[2];
			$_SESSION['empresa'] = $dadoslogin[4];
			print_r('true');	
		}
	}
?>