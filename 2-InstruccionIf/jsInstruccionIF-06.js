function mostrar()
{
	//tomo la edad  
    let age = document.getElementById('txtIdEdad').value;
    age = parseInt(age,10);
    
    // mayor de edad
    if ( age >= 18){
        alert('Eres mayor de edad');
    }
    // Adolecente
    else if (age >= 13 && age <= 17){
        alert('Eres un adolecente');
    }
    // Niño
    else if ( age >= 6 && age <= 13){
        alert('Eres un niño');
    } 
    // is not a namber
    else {
        alert('Valor no contemplado');
    }

}//FIN DE LA FUNCIÓN
