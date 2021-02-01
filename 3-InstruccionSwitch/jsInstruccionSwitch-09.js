function mostrar()
{	// Tomo estacion del año y destino
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	// Precios
	let base = 15000;
	let porcentaje1 = base * 20/100;
	let porcentaje2 = base * 10/100;

	switch(estacion){
		case 'Invierno':
			switch(destino){
				case 'Bariloche':
					alert(`Precio Final: ${base + porcentaje1}`);
					break;
				case 'Cataratas': 
				case 'Cordoba':
					alert(`Precio Final: ${base - porcentaje2}`);
					break;
				case 'Mar del plata':
					alert(`Precio Final: ${base - porcentaje1}`);
					break;
				default:
					alert('Valor no contemplado en destino');
			}
			break;
		case 'Verano':
			switch(destino){
				case 'Bariloche':
					alert(`Precio Final: ${base - porcentaje1}`);
					break;
				case 'Cataratas':
				case 'Cordoba':
					alert(`Precio Final: ${base + porcentaje2}`);
					break;
				case 'Mar del plata':
					alert(`Precio Final: ${base + porcentje1}`);
					break;
				default:
					alert('Valor no contemplado en destino');
			}
			break;
		case 'Otoño':
		case 'Primavera':
			switch(destino){
				case 'Bariloche':
				case 'Cataratas':
				case 'Mar del plata':
					alert(`Precio Final: ${base + porcentje2}`);
					break;
				case 'Cordoba':
					alert(`Precio Final: ${base}`);
				default:
					alert('Valor no contemplado en destino');
			}
		break;
		default:
			alert('Valor no contemplado en estacion');
	}
}