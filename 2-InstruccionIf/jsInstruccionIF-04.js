function mostrar()
{
	//tomo la edad  
    let age = document.getElementById('txtIdEdad').value;
    age = parseInt(age,10);
    
    if (age >=13 && age<=17){
        alert('Eres un adolecente')
    }
}
