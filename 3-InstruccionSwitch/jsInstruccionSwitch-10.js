function mostrar(){
	// Tomo estacion y destino
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case 'Invierno':
			switch(destino){
				case 'Bariloche':
					alert('Se viaja');
					break;
				case 'Cataratas':
				case 'Mar del plata':
				case 'Cordoba':
					alert('No se viaja');
					break;
				default:
					alert('Valor no contemplado en destino');
				}
			break;
		case 'Verano':
			switch(destino){
				case 'Cataratas':
				case 'Mar del plata':
					alert('Se viaja');
					break;
				case 'Bariloche':
				case 'Cordoba':
					alert('No se viaja');
					break;
				default:
					alert('Valor no contemplado en destino');
				}
			break;
		case 'Otoño':
			alert('Se viaja');
			break;
		case 'Primavera':
			if ( destino != 'Bariloche'){
				alert('Se viaja')
			}
			else if ( destino == 'Bariloche'){
				alert('No se viaja')
			}
			break;
		default:
			alert('Valor no contemplado en estacion');
	}
}