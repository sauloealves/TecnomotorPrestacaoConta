<header id="top_header">
	<div class="container">
		<div class="row">
			<div class="col-xs-6 col-sm-2">
				<a href="dashboard1.html" class="logo_main" title=""><img src="img/tecnomotor.png" style='max-height:50px' alt=""></a>
			</div>
			<div class="col-sm-push-4 col-sm-3 text-right hidden-xs">
				
				<div class="notification_separator"></div>
				
			</div>
			<div class="col-xs-6 col-sm-push-4 col-sm-3">
				<div class="pull-right dropdown">
					<a href="#" id='logoff'>Sair</a>
				</div>
			</div>
		</div>
	</div>
</header>						
<nav id="top_navigation">
	<div class="container">
		<ul id="icon_nav_h" class="top_ico_nav clearfix">
			<li>
				<a href="#">
					<i class="icon-home icon-2x"></i>
					<span class="menu_label">Inicio</span>
				</a>
			</li>			
			<li>             
				<a href="prestacao.php">
					<i class="icon-tasks icon-2x"></i>
					<span class="menu_label">Prestacao</span>
				</a>
			</li>
			<?php
			
			include('DBHelper.php');
			$QtdeCartoesCabecalho = 1;
			
			session_start();
			
			$matricula = $_SESSION['loginPrestacao'];
			
			$query = "SELECT * FROM PrestacaoConta..tblAdministrador WHERE Matricula = '" . $matricula . "'";
			
			$resultado = mssql_query($query);
			$QtdeCartoesCabecalho = mssql_num_rows ($resultado);
			// Se a qtde de cartões for zero quer dizer que o usuário é somente administrador, sendo transferido para o paineil administrativo
			if ($QtdeCartoesCabecalho > 0)
			{
				echo("<li>");
					echo("<a href='administrador.php'>");
						echo("<i class='icon-group icon-2x'></i>");
						echo("<span class='menu_label'>Usuario</span>");
					echo("</a>");
				echo("</li>");
			}
			
			?>
		</ul>
	</div>
</nav>
<!-- mobile navigation -->
<nav id="mobile_navigation"></nav>



<script type="text/javascript">
	$(function(){
		$('#logoff').click(function(){
			window.location="sessao.php?logoff"
		});
	})
</script>