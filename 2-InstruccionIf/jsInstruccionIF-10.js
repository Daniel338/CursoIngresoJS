function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
    let random = Math.random() * 10;
    random = Math.floor(random + 1);
    console.log(random);
    
    if (random == 9 || random == 10){
        alert(`nota: ${random} EXCELENTE`);
    }
    else if (random >= 4){
        alert(`nota: ${random} APROBO`)
    }
    else if (random < 4){
        alert(`nota: ${random} Vamos, la proxima se puede`)
    }
    else {
        alert('Valor no contemplado')
    }

}//FIN DE LA FUNCIÓN
