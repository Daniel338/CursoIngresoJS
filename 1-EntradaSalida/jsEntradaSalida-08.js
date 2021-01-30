/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  // Tomar los valores de Dividendo y divisor
  let dividendo = document.getElementById('txtIdNumeroDividendo').value;
  let divisor = document.getElementById('txtIdNumeroDivisor').value;
  
  // Conversion y operacion
  dividendo = parseInt(dividendo,10);
  divisor = parseInt(divisor,10);
  let resultado = dividendo % divisor;

  alert(`El Resto es ${resultado}`);
}
