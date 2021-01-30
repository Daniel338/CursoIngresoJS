function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

    // Messages
    let message1 = 'Abrigate que hace frio.';
    let message2 = 'Falta para el invierno.';
    let message3 = 'Ya pasamos el frio, ahora calor!!!.';

    switch (mesDelAño){
      case 'Enero':
        alert(message2);
        break;
      case 'Febrero':
        alert(message2);
        break;
      case 'Marzo':
        alert(message2);
        break;
      case 'Abril':
        alert(message2);
        break;
      case 'Mayo':
        alert(message2);
        break;
      case 'Junio':
        alert(message2);
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
      case 'Noviembre':
        alert(message3);
        break;
      case 'Diciembre':
        alert(message3);
        break;
      default:
        alert('Valor no contemplado');
    }

}//FIN DE LA FUNCIÓN
