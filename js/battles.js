let zeus = {
    basePower: 1000,
    life: 2000,
    fire: 500,
    thunder: 600,
    water: 380,
    earth: 380,
    wind: 900 
}

let poseidon = {
    basePower: 1000,
    life: 2000,
    fire: 600,
    thunder: 900,
    water: 380,
    earth: 380,
    wind: 500 
}

let odin = {
    basePower: 1000,
    life: 2000,
    fire: 950,
    thunder: 700,
    water: 380,
    earth: 480,
    wind: 200 
}

let thor = {
    basePower: 1000,
    life: 2000,
    fire: 650,
    thunder: 650,
    water: 670,
    earth: 600,
    wind: 500 
}

function battleSystem(){

    let zeusId = document.getElementById('zeus');
    let poseidonId = document.getElementById('poseidon');
    let odinId = document.getElementById('odin');
    let thorId = document.getElementById('thor');
    let spanPlayerId = document.getElementById('spanNombreGuerrero');

    //Zeus vs Odin
    if(zeusId.checked && poseidonId.checked){

        let basePower = 2000;
        let zeusRandom = random(1,3)
        let odinRandom = random(1,3)

        if(zeusRandom < odinRandom){
           let zeusResult = [
            basePower = 1000 - random(100,500),
            fire = 500 + basePower,
            thunder = 600 + basePower,
            water = 380 + basePower,
            earth = 380 + basePower,
            wind = 900 + basePower
        ]

        let odinResult = [
            basePower = 1000 + random(100,500),
            fire = 950 + basePower,
            thunder = 700 + basePower,
            water = 380 + basePower,
            earth = 480 + basePower,
            wind = 200 + basePower 
        ]

        let result = (basePower - zeusResult[random(0,5)]) - (basePower - odinResult[random(0,5)])

        let resultadoMensaje = document.getElementById('resultadoMensaje');
        let parrafoResultado = document.createElement('p')
        parrafoResultado.innerHTML = result;
        resultadoMensaje.appendChild(parrafoResultado)

        } else if (zeusRandom > odinRandom) {
            let zeusResult = [
                basePower = 1000 + random(100,500),
                fire = 500 + basePower,
                thunder = 600 + basePower,
                water = 380 + basePower,
                earth = 380 + basePower,
                wind = 900 + basePower
            ]
    
            let odinResult = [
                basePower = 1000 - random(100,500),
                fire = 950 + basePower,
                thunder = 700 + basePower,
                water = 380 + basePower,
                earth = 480 + basePower,
                wind = 200 + basePower 
            ]
    
            let result = (basePower - zeusResult[random(0,5)]) - (basePower - odinResult[random(0,5)])
    
            let resultadoMensaje = document.getElementById('resultadoMensaje');
            let parrafoResultado = document.createElement('p')
            parrafoResultado.innerHTML = result;
            resultadoMensaje.appendChild(parrafoResultado)
            
        }
      
    }

    //Zeus vs Poseidon
    if(zeusId.checked && poseidonId.checked){

        let basePower = 2000;
        let zeusRandom = random(1,3)
        let poseidonRandom = random(1,3)

        if(zeusRandom < poseidonRandom){
           let zeusResult = [
            basePower = 1000 - random(100,500),
            fire = 500 + basePower,
            thunder = 600 + basePower,
            water = 380 + basePower,
            earth = 380 + basePower,
            wind = 900 + basePower
        ]

        let poseidonResult = [
            basePower = 1000 + random(100,500),
            fire = 950 + basePower,
            thunder = 700 + basePower,
            water = 380 + basePower,
            earth = 480 + basePower,
            wind = 200 + basePower 
        ]

        let result = (basePower - zeusResult[random(0,5)]) - (basePower - poseidonResult[random(0,5)])

        let resultadoMensaje = document.getElementById('resultadoMensaje');
        let parrafoResultado = document.createElement('p')
        parrafoResultado.innerHTML = result;
        resultadoMensaje.appendChild(parrafoResultado)

        } else if (zeusRandom > poseidonRandom) {
            let zeusResult = [
                basePower = 1000 + random(100,500),
                fire = 500 + basePower,
                thunder = 600 + basePower,
                water = 380 + basePower,
                earth = 380 + basePower,
                wind = 900 + basePower
            ]
    
            let poseidonResult = [
                basePower = 1000 - random(100,500),
                fire = 950 + basePower,
                thunder = 700 + basePower,
                water = 380 + basePower,
                earth = 480 + basePower,
                wind = 200 + basePower 
            ]
    
            let result = (basePower - zeusResult[random(0,5)]) - (basePower - poseidonResult[random(0,5)])
    
            let resultadoMensaje = document.getElementById('resultadoMensaje');
            let parrafoResultado = document.createElement('p')
            parrafoResultado.innerHTML = result;
            resultadoMensaje.appendChild(parrafoResultado)
            
        }
      
    }

    //Zeus vs Thor
    if(zeusId.checked && thorId.checked){

        let basePower = 2000;
        let zeusRandom = random(1,3)
        let thorRandom = random(1,3)

        if(zeusRandom < thorRandom){
           let zeusResult = [
            basePower = 1000 - random(100,500),
            fire = 500 + basePower,
            thunder = 600 + basePower,
            water = 380 + basePower,
            earth = 380 + basePower,
            wind = 900 + basePower
        ]

        let thorResult = [
            basePower = 1000 + random(100,500),
            fire = 950 + basePower,
            thunder = 700 + basePower,
            water = 380 + basePower,
            earth = 480 + basePower,
            wind = 200 + basePower 
        ]

        let result = (basePower - zeusResult[random(0,5)]) - (basePower - thorResult[random(0,5)])

        let resultadoMensaje = document.getElementById('resultadoMensaje');
        let parrafoResultado = document.createElement('p')
        parrafoResultado.innerHTML = result;
        resultadoMensaje.appendChild(parrafoResultado)

        } else if (zeusRandom > thorRandom) {
            let zeusResult = [
                basePower = 1000 + random(100,500),
                fire = 500 + basePower,
                thunder = 600 + basePower,
                water = 380 + basePower,
                earth = 380 + basePower,
                wind = 900 + basePower
            ]
    
            let thorResult = [
                basePower = 1000 - random(100,500),
                fire = 950 + basePower,
                thunder = 700 + basePower,
                water = 380 + basePower,
                earth = 480 + basePower,
                wind = 200 + basePower 
            ]
    
            let result = (basePower - zeusResult[random(0,5)]) - (basePower - thorResult[random(0,5)])
    
            let resultadoMensaje = document.getElementById('resultadoMensaje');
            let parrafoResultado = document.createElement('p')
            parrafoResultado.innerHTML = result;
            resultadoMensaje.appendChild(parrafoResultado)
            
        }
      
    }

    
}
