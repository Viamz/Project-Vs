let zeus = {
    basePower: 1000,
    life: 2000,
    fire: 500,
    thunder: 600,
    water: 380,
    earth: 380,
    wind: 900 
}

let ares = {
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

function random(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}