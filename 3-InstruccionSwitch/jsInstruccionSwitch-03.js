function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	let message1 = 'Este mes no tiene más de 29 días.'
	let message2 = 'Este mes tiene 30 o más días.'
	
	switch(mesDelAño){
		case 'Febrero':
			alert(message1);
			break;
		default:
			alert(message2);
	}
	


}//FIN DE LA FUNCIÓN