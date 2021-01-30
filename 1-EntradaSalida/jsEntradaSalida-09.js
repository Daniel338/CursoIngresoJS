/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    // valor Sueldo
    let sueldo = document.getElementById('txtIdSueldo').value;
    sueldo = parseInt(sueldo,10);
    
    // Operacion y aumento
    let aumento = sueldo * (10 / 100);
    let sueldoFinal = sueldo + aumento;
    
    // Mostrar sueldoFinal
    let objResultado = document.getElementById('txtIdResultado')
    objResultado.placeholder = sueldoFinal;
}
