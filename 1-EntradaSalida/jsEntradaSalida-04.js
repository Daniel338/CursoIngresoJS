/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    let dato = prompt("Ingrese una palabra");
    let txtIdName = document.getElementById('txtIdNombre');
    txtIdName.placeholder = dato;
}

