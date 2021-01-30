function mostrar()
{
	//tomo la edad  
    let age = document.getElementById('txtIdEdad').value;
    age = parseInt(age,10);
    
    // Tomo el estado civil
    let civilStatus = document.getElementById('estadoCivil').value;
    
    if( age >= 18 && (civilStatus == 'Soltero')){
        alert('Eres soltero y no eres menor de edad');
    }
}//FIN DE LA FUNCIÓN
