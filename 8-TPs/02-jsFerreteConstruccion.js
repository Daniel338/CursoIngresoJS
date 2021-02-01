/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{	
	// Tomo largo y ancho
	let largo = document.getElementById("txtIdLargo").value;
	let ancho = document.getElementById("txtIdAncho").value;
	// Conversion
	largo = parseInt(largo,10);
	ancho = parseInt(ancho,10);

	let perimetro = (2 * largo) + (2 * ancho);
	alert(`Comprar 3 hilos de: ${perimetro} m.`);
}
function Circulo () 
{
	// Tomo radio
	let radio = document.getElementById("txtIdRadio").value;

	// Conversion
	radio = parseInt(radio,10);

	let perimetro = 2 * Math.PI * radio;
	alert(`Comprar 3 hilos de: ${perimetro} m.`);	
}
function Materiales () 
{
	// Tomo largo y ancho
	let largo = document.getElementById("txtIdLargo").value;
	let ancho = document.getElementById("txtIdAncho").value;

	// Conversion
	largo = parseInt(largo,10);
	ancho = parseInt(ancho,10);

	let cemento = 2;
	let cal = 3;
	let area = largo * ancho;
	cemento = cemento * area;
	cal = cal * area;
	alert(`Se necesitan: ${cemento} bolsas de cemento y ${cal} de cal`)
}