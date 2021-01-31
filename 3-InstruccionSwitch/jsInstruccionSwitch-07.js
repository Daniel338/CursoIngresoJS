function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	// Punto de referencia Buenos Aires
	switch(destinoIngresado){
		case 'Bariloche':
			alert('Oeste');
			break;
		case 'Cataratas':
			alert('Norte');
			break;
		case 'Mar del plata':
			alert('Sur');
			break;
		case 'Ushuaia':
			alert('Sur');
			break;
		default:
			alert('Valor no contemplado');
	}

}//FIN DE LA FUNCIÓN