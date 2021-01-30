function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	let message1 = 'Tiene 31 días';
	let message2 = 'Tiene 28 días';
	let message3 = 'Tiene 30 días';

	switch(mesDelAño){
		case 'Enero':
			alert(message1);
			break;
		case 'Febrero':
			alert(message2);
			break;
		case 'Marzo':
			alert(message1);
			break;
		case 'Abril':
			alert(message3);
			break;
		case 'Mayo':
			alert(message1);
			break;
		case 'Junio':
			alert(message3);
			break;
		case 'Julio':
			alert(message1);
			break;
		case 'Agosto':
			alert(message1);
			break;
		case 'Septiembre':
			alert(message3);
			break;
		case 'Obtubre':
			alert(message1);
			break;
		case 'Noviembre':
			alert(message3);
			break;
		case 'Diciembre':
			alert(message1);
			break;
		default:
			alert('Valor no contemplado');
	}



}//FIN DE LA FUNCIÓN