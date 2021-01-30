/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
    // valor importe
    let importe = document.getElementById('txtIdImporte').value;
    importe = parseInt(importe,10);
    
    // Operacion y descuento
    let descuento = importe * (25 / 100);
    let sueldoFinal = importe - descuento;
    
    // Mostrar sueldoFinal
    let objResultado = document.getElementById('txtIdResultado')
    objResultado.placeholder = sueldoFinal;
}
