const prompt = require('prompt-sync')();

function identificador (genero, idade){
    if(genero == "f" && idade > 40){
        let = prompt ("Barato");
    }
    if(genero == "m" && idade < 40)
        let = prompt ("Caro");
}

let identificacao = prompt ("Qual o gen:");
let idades = prompt ("Qual a idade:");
let result = identificador (identificacao, idades);
console.log(result);

