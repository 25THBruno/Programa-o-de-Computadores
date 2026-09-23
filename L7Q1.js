const prompt = require('prompt-sync')();

let x = prompt("digite o primeiro numero; ")
let y = prompt("digite o segundo numero; ")
let z = prompt("digite o terceiro numero; ")

let media = (x + y + z)/3
let quantidade = 0;

if (x >= media){
    quantidade ++;
    }
    if (y >= media){
        quantidade ++;
        }
        if (z >= media){
            quantidade ++;
            }
  console.log("Existem",quantidade, "números maiores que a média"); 