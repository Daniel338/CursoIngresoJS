function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado){
		case 'Bariloche':
			alert(`En ${destinoIngresado} hace Frio`);
			break;
		case 'Cataratas':
			alert(`En ${destinoIngresado} hace Calor`);
			break;
		case 'Mar del plata':
			alert(`En ${destinoIngresado} hace Calor`);
			break;
		case 'Ushuaia':
			alert(`En ${destinoIngresado} hace Frio`);
			break;
		default:
			alert('Valor no contemplado');
	}

}//FIN DE LA FUNCIÓN