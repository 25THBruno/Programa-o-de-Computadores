const prompt = require('prompt-sync')();
let leite = 5.50
let arroz = 8.30
let cafe = 11.70
let parcial = 0;

let litrosleite = Number(prompt('Quantos litros de leite?' ))
parcial+=litrosleite * leite
console.log("parcial: ", parcial.toFixed(2))

let kgarroz = Number(prompt('Quantos kg de arroz?' ))
parcial+=kgarroz * arroz
console.log("parcial: ", parcial.toFixed(2))

let pacotescafe = Number(prompt('Quantos pacotes de cafe?' ))
parcial+=pacotescafe * cafe
console.log("parcial: ", parcial.toFixed(2))