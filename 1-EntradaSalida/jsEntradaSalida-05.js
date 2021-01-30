/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
  let valueName = document.getElementById('txtIdNombre').value;
  let valueAge = document.getElementById('txtIdEdad').value;
  alert (`Usted se llama ${valueName} y tiene ${valueAge} años`)
}

