/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  let num1 = document.getElementById('txtIdNumeroUno').value;
  let num2 = document.getElementById('txtIdNumeroDos').value;

  // Conversion
  num1 = parseInt(num1,10);
  num2 = parseInt(num2,10);
  
  alert(`La suma es ${num1 + num2}`);
}

