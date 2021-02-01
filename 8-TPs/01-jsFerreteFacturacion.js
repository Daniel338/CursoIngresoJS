/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	// Tomo precios
	let precioUno = document.getElementById("txtIdPrecioUno").value;
	let precioDos = document.getElementById("txtIdPrecioDos").value;
	let precioTres = document.getElementById("txtIdPrecioTres").value;
	// Conversion
	precioUno = parseInt(precioUno,10);
	precioDos = parseInt(precioDos,10);
	precioTres = parseInt(precioTres,10);

	let suma = `La suma es: ${precioUno + precioDos + precioTres}`;
	alert(suma);
}
function Promedio () 
{
	// Tomo precios
	let precioUno = document.getElementById("txtIdPrecioUno").value;
	let precioDos = document.getElementById("txtIdPrecioDos").value;
	let precioTres = document.getElementById("txtIdPrecioTres").value;
	// Conversion
	precioUno = parseInt(precioUno,10);
	precioDos = parseInt(precioDos,10);
	precioTres = parseInt(precioTres,10);

	let promedio = `El promedio es: ${(precioUno + precioDos + precioTres)/3}`;
	alert(promedio);
}
function PrecioFinal () 
{
	// Tomo precios
	let precioUno = document.getElementById("txtIdPrecioUno").value;
	let precioDos = document.getElementById("txtIdPrecioDos").value;
	let precioTres = document.getElementById("txtIdPrecioTres").value;
	// Conversion
	precioUno = parseInt(precioUno,10);
	precioDos = parseInt(precioDos,10);
	precioTres = parseInt(precioTres,10);

	let suma = precioUno + precioDos + precioTres;
	let iva = (suma * 21) / 100;
	let precioFinal = suma + iva;
	alert(`El precio Final es: ${precioFinal}`)
}