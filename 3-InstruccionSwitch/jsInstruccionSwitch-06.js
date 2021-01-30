function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia,10);
	alert(horaDelDia);
	
	let message1 = `Es de mañana.`;
	let message2 = `Es de tarde.`;
	let message3 = `Es de noche.`;

	switch(horaDelDia){
		case 0:
			alert(message3);
			break;
		case 1:
			alert(message3);
			break;
		case 2:
			alert(message3);
			break;
		case 3:
			alert(message3);
			break;
		case 4:
			alert(message3);
			break;
		case 5:
			alert(message3);
			break;
		case 6:
			alert(message3);
			break;
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
		case 12:
			alert(message2);
			break;
		case 13:
			alert(message2);
			break;
		case 14:
			alert(message2);
			break;
		case 15:
			alert(message2);
			break;
		case 16:
			alert(message2);
			break;
		case 17:
			alert(message2);
			break;
		case 18:
			alert(message2);
			break;
		case 19:
			alert(message2);
			break;
		case 20:
			alert(message3);
			break;
		case 21:
			alert(message3);
			break;
		case 22:
			alert(message3);
			break;
		case 23:
			alert(message3);
			break;
		case 24:
			alert(message3);
			break;
		
		default:
			alert('La hora no existe.');
	}

}//FIN DE LA FUNCIÓN