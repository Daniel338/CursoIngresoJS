function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia,10);
	alert(horaDelDia);

	let message1 = `Es de mañana`;
	
	switch(horaDelDia){
		case 7:
			alert(message1);
			break;
		case 8:
			alert(message1);
			break;
		case 9:
			alert(message1);
			break;
		case 10:
			alert(message1);
			break;
		case 11:
			alert(message1);
			break;
		default:
			alert('valor no contemplado');
	}



}//FIN DE LA FUNCIÓN