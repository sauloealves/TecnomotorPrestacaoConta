<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
	<title>Tecnomotor - Login</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/todc-bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/theme/color_1.css" id="theme">
	<link href='http://fonts.googleapis.com/css?family=Roboto:300&amp;subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<style>
		body {padding:80px 0 0}
		textarea, input[type="password"], input[type="text"], input[type="submit"] {-webkit-appearance: none}
		.navbar-brand {font:300 15px/18px 'Roboto', sans-serif}
		.login_wrapper {position:relative;width:380px;margin:0 auto}
		.login_panel {background:#f8f8f8;padding:20px;-webkit-box-shadow: 0 0 0 4px #ededed;-moz-box-shadow: 0 0 0 4px #ededed;box-shadow: 0 0 0 4px #ededed;border:1px solid #ddd;position:relative}
		.login_head {margin-bottom:20px}
		.login_head h1 {margin:0;font:300 20px/24px 'Roboto', sans-serif}
		.login_submit {padding:10px 0}
		.login_panel label a {font-size:11px;margin-right:4px}
		
		@media (max-width: 767px) {
			body {padding-top:40px}
			.navbar {display:none}
			.login_wrapper {width:100%;padding:0 20px}
		}
	</style>
	<script src="js/jquery.min.js"></script>
	<script src="js/config.js"></script>
	
	<!--[if lt IE 9]>
		<script src="js/ie/html5shiv.js"></script>
		<script src="js/ie/respond.min.js"></script>
	<![endif]-->
</head>
<body>

	<div class="login_wrapper">
		<div class="login_panel log_section">
			<div class="login_head" style='text-align:center'>
				<img src="img/tecnomotor.png" style="max-height: 50px" />
			</div>
			<form action="dashboard.php" id="login_form" >
				<div class="form-group">
					<label for="login_username">Matrículas</label>
					<input type="text" id="login_username" name="login_username" class="form-control input-lg" data-required="true" data-minlength="2" data-required-message="Matrícula inválida" value="" >
				</div>
				<div class="form-group">
					<label for="login_username">Senha</label>
					<input type="password" id="login_password" name="login_password" class="form-control input-lg" data-required="true" data-minlength="4" data-minlength-message="Senha inválida" data-required-message="Senha inválida" value="">
				</div>
				<div class="login_submit">
					<input type='button' id="btnEntrar" class="btn btn-primary btn-block btn-lg" value="Entrar"></input>
				</div>
				
			</form>
		</div>
		
	</div>

	<!-- jquery cookie -->
	<script src="js/jquery_cookie.min.js"></script>
	<script src="js/lib/parsley/parsley.min.js"></script>
	<script src="js/tecnomotor.js"></script>
	<script>
		$(function() {
			
			$("#login_username").focus();
			
			$("#btnEntrar").click(function(){
				$.ajax({
					type:'POST',
					url: retornaUrlPadrao() + 'loginvalidar.php?login_username=' + $("#login_username").val() + "&login_password=" + $("#login_password").val(),
					data:'',
					dataType: 'json',
					success: function(resp){
						if (resp == true)
							window.location = retornaUrlPadrao() + 'prestacao.php';
						else{
							$("#login_password").parsley('destroy');
							var liError = {};
							liError[ 'parsley-validated' ] = 'Usuário e senha não conferem';
							$("#login_password").parsley('manageErrorContainer');
							$("#login_password").parsley('addError', liError);
							$("#login_username").focus();
						}
					}
				});				
			});
			
			//* validation
			$('#login_form').parsley({
				errors: {
					classHandler: function ( elem, isRadioOrCheckbox ) {
						if(isRadioOrCheckbox) {
							return $(elem).closest('.form_sep');
						}
					},
					container: function (element, isRadioOrCheckbox) {
						if(isRadioOrCheckbox) {
							return element.closest('.form_sep');
						}
					}
				}
			});
						
			// set theme from cookie
			if($.cookie('ebro_color') != undefined) {
				$('#theme').attr('href','css/theme/'+$.cookie('ebro_color')+'.css');
			}			
		});
	</script>
</body>
</html>