function dataAtual(){	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd
	} 
	if(mm<10){
		mm='0'+mm
	} 
	var today = dd+'/'+mm+'/'+yyyy;
	
	return today;
}

function primeiroDiaMes(){
	var date = new Date();
	var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	return convertDate(firstDay);
}

function ultimoDiaMes(){
	var date = new Date();
	lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	return convertDate(lastDay);
}

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

function converterDataJson(data){
	var data = data.split(' ');
	var mes = "";
	var dia = "";
	var ano = "";
	
	switch (data[0]){
		case 'Jan':
			mes = "01";
			break;
		case 'Feb':
			mes = "02";
			break;
		case 'Mar':
			mes = "03";
			break;
		case 'Apr':
			mes = "04";
			break;
		case 'May':
			mes = "05";
			break;
		case 'Jun':
			mes = "06";
			break;
		case 'Jul':
			mes = "07";
			break;
		case 'Aug':
			mes = "08";
			break;
		case 'Sep':
			mes = "09";
			break;
		case 'Oct':
			mes = "10";
			break;
		case 'Nov':
			mes = "11";
			break;
		case 'Dec':
			mes = "12";
			break;		
	}
	
	return data[1] + "/" + mes + "/" + data[2];
}