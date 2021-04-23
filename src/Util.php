<?php

function RemoveAcentos($txt){
	   $beta=array(
		  a,a,a,a,a,e,e,e,e,i,i,i,i,o,o,o,o,o,u,u,u,u,c,A,A,A,A,A,E,E,E,E,I,I,I,I,O,O,O,O,O,U,U,U,U,C);
	   $alfa=array(
		  á,à,ã,â,ä,é,è,ê,ë,í,ì,î,ï,ó,ò,õ,ô,ö,ú,ù,û,ü,ç,Á,À,Ã,Â,Ä,É,È,Ê,Ë,Í,Ì,Î,Ï,Ó,Ò,Õ,Ô,Ö,Ú,Ù,Û,Ü,Ç);
	   $gama=str_replace($alfa,$beta,$txt);
	   $omega=strtoupper($gama);
	   $omega=strip_tags($omega);
	   $omega=trim($omega);
	   return($omega);
	}
	
?>