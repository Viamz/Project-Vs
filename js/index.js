function starGame(){
    // Display none para seccion de ataques y mensajes
    let selecAtaque = document.getElementById('selecAtaque')
    selecAtaque.style.display = 'none'
    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = 'none'

    //Boton seleccion de Personajes 
    let botonSelectWarrior = document.getElementById('botonSelectWarrior');
    botonSelectWarrior.addEventListener('click', playerSelect);

    //Boton de reinicio del juego (Disparador y display none)
    let botonReiniciar = document.getElementById('botonReiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = 'none'

    //Display none para tarjetas personajes seleccionados para la batalla.
    let selectedPjs = document.getElementById('selectedPjs');
    selectedPjs.style.display = 'none'
}

function playerSelect() {
    //Display block para mostrar seleccion de personajes
    let selecAtaque = document.getElementById('selecAtaque');
    selecAtaque.style.display = 'block';

    //Display none (Ocultar) seccion despues de presionar el boton de seleccionar personaje 
    let selecPjs = document.getElementById('selecPjs');
    selecPjs.style.display = 'none';

    //Se muestra el nombre de los personaje seleccionado en la seccion de elegir ataque
    let zeus = document.getElementById('zeus');
    let poseidon = document.getElementById('poseidon');
    let odin = document.getElementById('odin');
    let thor = document.getElementById('thor');
    let spanPlayer = document.getElementById('spanNombreGuerrero');

    if(zeus.checked){
        spanPlayer.innerHTML = 'Zeus';
    } else if(poseidon.checked){
        spanPlayer.innerHTML = 'Poseidon';
    } else if(odin.checked){
        spanPlayer.innerHTML = 'Odin';
    } else if(thor.checked){
        spanPlayer.innerHTML = 'Thor';
    } else{
        alert('Selecciona un combatiente primero')
    }

    rivalSelect();
    combatStrikes();
}

function combatStrikes(){
    //Muestra la seccion de mensajes donde se revela el historial de luchas
    let mensajes = document.getElementById('mensajes')
    mensajes.style.display = 'block'

    //display block para mostrar las tarjetas de personajes seleccionados para la batalla. 
    let selectedPjs = document.getElementById('selectedPjs');
    selectedPjs.style.display = 'block';   

    let fireButton = document.getElementById('botonFuego')
    fireButton.addEventListener('click', PlayerAtack)
    let watterButton = document.getElementById('botonAgua')
    watterButton.addEventListener('click', PlayerAtack)
    let thunderButton = document.getElementById('botonRayo')
    thunderButton.addEventListener('click',PlayerAtack)
    let earthButton = document.getElementById('botonTierra')
    earthButton.addEventListener('click',PlayerAtack)
    let ataqueJugadorLanzado = document.getElementById('ataqueJugadorLanzado');

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
        
        //MEJORAR: Que no se disparen alertas en la seleccion de ataques, sino que aparezcan en la seccion de historial de batalla
        alert(message)
        rivalStrikes();     
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
        
        
        //MEJORAR: Que no se disparen alertas en la seleccion de ataques, sino que aparezcan en la seccion de historial de batalla
        alert(result);  
        battleSystem()

        mensajesDeAtaques()
    }

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

