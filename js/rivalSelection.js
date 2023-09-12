//Funcion de seleccion aleatoria de personaje para la computadora y se muestra en el Span de la pc

function rivalSelect(){
    let pc = random(1,4);
    let result = "";
    
    if(pc == 1 ){
        result = spanNombrePc.innerHTML = 'Zeus';
    } else if(pc == 2){
        result = spanNombrePc.innerHTML = 'Poseidon';
    } else if(pc == 3){
        result = spanNombrePc.innerHTML = 'Odin';
    } else if(pc == 4){
        result = spanNombrePc.innerHTML = 'Thor';
    } 

    return result;
}