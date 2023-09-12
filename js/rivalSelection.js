//Funcion de seleccion aleatoria de personaje para la computadora y se muestra en el Span de la pc

function rivalSelect(){
    let pc = random(1,4);
    let result = "";
    
    if(pc == 1 ){
        result = spanNombrePc.innerHTML = 'Naruto';
    } else if(pc == 2){
        result = spanNombrePc.innerHTML = 'Minato';
    } else if(pc == 3){
        result = spanNombrePc.innerHTML = 'Madara';
    } else if(pc == 4){
        result = spanNombrePc.innerHTML = 'Kakashi';
    } 

    return result;
}