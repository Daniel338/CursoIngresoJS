function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
    
    switch (mesDelAño){
      case 'Enero':
        alert('Que comiences bien el año!!!.');
        break;
      case 'Marzo':
        alert('A clases!!!.');
        break;
      case 'Julio':
        alert('Se vienen las vacaciones!!!.');
        break;
      case 'Diciembre':
        alert('Felices Fiestas!!!.');
        break;
      default:
        alert('Valor no contemplado');
    }


}//FIN DE LA FUNCIÓN
