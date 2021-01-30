/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;
  // conversion
  num1 = parseInt(num1,10);
  num2 = parseInt(num2,10);
  alert(`La suma es ${num1 + num2}`)
}

function restar()
{
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;
  // conversion
  num1 = parseInt(num1,10);
  num2 = parseInt(num2,10);
  alert(`La Resta es ${num1 - num2}`)
}

function multiplicar()
{ 
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;
  // conversion
  num1 = parseInt(num1,10);
  num2 = parseInt(num2,10);
  alert(`La Multiplicacion es ${num1 * num2}`)

}

function dividir()
{
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;
  // conversion
  num1 = parseInt(num1,10);
  num2 = parseInt(num2,10);
  alert(`La Division es ${num1 / num2}`)

}

