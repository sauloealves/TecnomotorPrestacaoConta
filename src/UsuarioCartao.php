<?php

include("DBHelper.php");

// Função que verifica o proprietario do cartao
if ($_SERVER["QUERY_STRING"] == 'ProprietarioCartao')
{
	$cartao = $_POST['cartao'];
		
	$query = "SELECT * FROM PrestacaoConta..tblCartao C ";
	$query = $query."INNER JOIN PrestacaoConta..tblUsuarioCartao UC ";
	$query = $query."	ON C.FK_UsuarioCartao = UC.PK_UsuarioCartao ";
	$query = $query."WHERE C.Numero = '".$cartao."'";
	
	$resultado = mssql_query($query);
	
	if (mssql_num_rows($resultado) > 0)
	{
		$array = mssql_fetch_array($resultado);
		print_r($array[5]);
	}
	
}

if ($_SERVER["QUERY_STRING"] == 'SelecionarCartoes')
{	
	$query = "SELECT C.Numero, 'XXXX-XXXX-XXXX-' + C.Numero + ' - ' + UC.Nome AS Descricao FROM PrestacaoConta..tblCartao C ";
	$query = $query."INNER JOIN PrestacaoConta..tblUsuarioCartao UC ON ";
	$query = $query."	C.FK_UsuarioCartao = UC.PK_UsuarioCartao ";
	$query = $query."ORDER BY UC.Nome";
	
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

if ($_SERVER["QUERY_STRING"] == 'ListarUsuariosAcesso')
{	
    $cartao = $_POST['cartao'];
    
	$query = "SELECT F.*,  ";
	$query = $query."CASE ISNULL(UC.Matricula,'0') ";
	$query = $query."	WHEN '0' THEN 0 ELSE  1 END AS Acesso ";
	$query = $query."FROM PrestacaoConta..VW_FUNCIONARIOS F ";
    $query = $query."LEFT JOIN PrestacaoConta..tblUsuarioCartao UC ON F.RA_MAT COLLATE Latin1_General_CI_AS = UC.MatriculaUsuario COLLATE Latin1_General_CI_AS  ";
    $query = $query."AND FinalCartao = '".$cartao."' ";
    $query = $query."ORDER BY RA_NOME";
	$resultado = mssql_query($query);
	
	$json = array();
		
    do{
        while ($row = mssql_fetch_array($resultado)) {
            $row['RA_NOME'] = utf8_encode($row['RA_NOME']);
            $json[] = $row;
        }
    }while(mssql_next_result($resultado));

    print_r(json_encode($json));
	
}

if ($_SERVER["QUERY_STRING"] == 'AlterarAcessoUsuario')
{	
    $matricula = $_POST['matricula'];
    $checado = $_POST['checado'];
	$cartao = $_POST['fatura'];	
	
	// Procura o nome do funcionario de acordo com sua matricula

	$query = "SELECT RA_MAT,RA_NOME, '100' AS EMPRESA, RA_FILIAL from DADOSADV..SRA100 ";
	$query = $query."WHERE RA_MAT = '".$matricula."' ";
	$query = $query."UNION ";
	$query = $query."select RA_MAT,RA_NOME, '010', RA_FILIAL from DADOSADV..SRA010 ";
    $query = $query."WHERE RA_MAT = '".$matricula."' ";
	
    $resultado = mssql_query($query);	
		
	if (mssql_num_rows($resultado) > 0)
	{
		$array = mssql_fetch_array($resultado);
		$nome = ($array[1]);
		$empresa = ($array[2]);
		$filial = ($array[3]);
	}
	
	if ($checado == 'insere')
	{
		$query = "INSERT INTO PrestacaoConta..tblUsuarioCartao VALUES ('".$nome."','".$cartao."','".$matricula."','".$empresa."','".$filial."','".$matricula."')";		
		mssql_query($query);
		print_r("Inserido com sucesso");
	}
	else
	{
		$query = "DELETE FROM PrestacaoConta..tblUsuarioCartao WHERE FinalCartao = '".$cartao."' AND MatriculaUsuario = '".$matricula."'";
		mssql_query($query);
		print_r("Removido com sucesso");
	}
		
 	
}
?>