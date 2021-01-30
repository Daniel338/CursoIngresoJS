function mostrar()
{
    // Tomo edad
    let age = document.getElementById('txtIdEdad').value;
    age = parseInt(age,10);

    if ( age >= 18 && age <=130){
        alert('Eres mayor de edad');
    } else {
        alert('Eres menor de edad');
    }
}
