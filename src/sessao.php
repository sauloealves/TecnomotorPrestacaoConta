<?php
	
	if ($_SERVER['QUERY_STRING']=='logoff'){
		session_start();
		unset($_SESSION['loginPrestacao']);
		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=login.php">';  
	}
	else
	{
		// Verificar se est� logado no sistema, se n�o estiver redirecionar para o login
		session_start();
		
		if ($_SESSION['loginPrestacao'] == '')
		{
			echo '<META HTTP-EQUIV="Refresh" Content="0; URL=login.php">';  
			exit();
			
		}
	}
?>