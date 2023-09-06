let naruto = {
    basePower: 1000,
    life: 2000,
    fire: 500,
    thunder: 600,
    water: 380,
    earth: 380,
    wind: 900 
}

let minato = {
    basePower: 1000,
    life: 2000,
    fire: 600,
    thunder: 900,
    water: 380,
    earth: 380,
    wind: 500 
}

let madara = {
    basePower: 1000,
    life: 2000,
    fire: 950,
    thunder: 700,
    water: 380,
    earth: 480,
    wind: 200 
}

let kakashi = {
    basePower: 1000,
    life: 2000,
    fire: 650,
    thunder: 650,
    water: 670,
    earth: 600,
    wind: 500 
}


function random(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function starGame(){
    let selecAtaque = document.getElementById('selecAtaque')
    selecAtaque.style.display = 'none'
    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = 'none'
    let botonSelectWarrior = document.getElementById('botonSelectWarrior');
    botonSelectWarrior.addEventListener('click', playerSelect);
    let botonReiniciar = document.getElementById('botonReiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'
}


function playerSelect() {
    let selecAtaque = document.getElementById('selecAtaque')
    selecAtaque.style.display = 'block'
    let naruto = document.getElementById('naruto');
    let minato = document.getElementById('minato');
    let madara = document.getElementById('madara');
    let kakashi = document.getElementById('kakashi');
    let spanPlayer = document.getElementById('spanNombreGuerrero');

    if(naruto.checked){
        alert('Selecionaste a: Naruto Uzumaki como tu guerrero. Es el prota, que falta de imaginacion tienes.')
        spanPlayer.innerHTML = 'Naruto';
    } else if(minato.checked){
        alert('Selecionaste a: Minato Namikaze como tu guerrero. Ni tu vas a ver cual ataque se va a inventar.')
        spanPlayer.innerHTML = 'Minato';
    } else if(madara.checked){
        alert('Selecionaste a: Madara Uchiha como tu guerrero. Ya tu rival valio verga.')
        spanPlayer.innerHTML = 'Madara';
    } else if(kakashi.checked){
        alert('Selecionaste a: Kakashi Hatake como tu guerrero. No creo que ganes contra los otros tres, pero te aplaudo por valiente.')
        spanPlayer.innerHTML = 'Kakashi';
    } else{
        alert('Selecciona un combatiente primero')
    }

    rivalSelect();
    combatStrikes();
}

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

function combatStrikes(){

    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = 'block'
    let fireButton = document.getElementById('botonFuego')
    fireButton.addEventListener('click', PlayerAtack)
    let watterButton = document.getElementById('botonAgua')
    watterButton.addEventListener('click', PlayerAtack)
    let thunderButton = document.getElementById('botonRayo')
    thunderButton.addEventListener('click',PlayerAtack)
    let earthButton = document.getElementById('botonTierra')
    earthButton.addEventListener('click',PlayerAtack)
    let ataqueJugadorLanzado = document.getElementById('ataqueJugadorLanzado')

    function PlayerAtack(){

        let message = "";
        switch(this.id){
            case 'botonFuego' :        
                message = "Seleccionaste ataque de Fuego";
                ataqueJugadorLanzado.innerHTML = "Fuego 🔥"
                break;
            case 'botonAgua' :
                message = "Seleccionaste ataque de Agua";
                ataqueJugadorLanzado.innerHTML = "Agua 💧"
                break;
            case 'botonRayo' :
                message = "Seleccionaste ataque de Rayo";
                ataqueJugadorLanzado.innerHTML = "Rayo ⚡"
                break;
            case 'botonTierra' :
                message = "Seleccionaste ataque de Tierra";
                ataqueJugadorLanzado.innerHTML = "Tierra 🌱"
                break;
        }

        alert(message)

        rivalStrikes(); 
        attackPoints()      
    }

    function rivalStrikes(){
        let pc = random(1,4);
        let result = "";
        
        if(pc == 1 ){
            result = 'Pc selecciono ataque de Fuego';
            ataqueRivalLanzado.innerHTML = "Fuego 🔥"
        } else if(pc == 2){
            result = 'Pc selecciono ataque de Agua';
            ataqueRivalLanzado.innerHTML = "Agua 💧"
        } else if(pc == 3){
            result = 'Pc selecciono ataque de Rayo';
            ataqueRivalLanzado.innerHTML = "Rayo ⚡"
        } else if(pc == 4){
            result = 'Pc selecciono ataque de Tierra';
            ataqueRivalLanzado.innerHTML = "Tierra 🌱"
        } 
    
        alert(result);  
        mensajesDeAtaques()
    }

    // function batallas(){

    //     let resultado = document.getElementById('resultado')

    //     let calculo = 0;
        
       

    // }


    botonReiniciar.style.display = 'block'
}

function mensajesDeAtaques(){
    let resultadoMensaje = document.getElementById('resultadoMensaje');
    let parrafoResultado = document.createElement('p')
    parrafoResultado.innerHTML = "Hola Mundo"
    resultadoMensaje.appendChild(parrafoResultado)
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('DOMContentLoaded', starGame);

