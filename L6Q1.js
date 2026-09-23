const prompt = require('prompt-sync')();

function conversao (ttf, temperatura){

    if(ttf === "f" || ttf === "F"){
        let temperaturaFahrenheit = 9/5 * temperatura + 32;
        return temperaturaFahrenheit;
    }
    if(ttf === "c" || ttf === "C");
        let temperaturaCel = 5/9 * temperatura - 160/9;
        return temperaturaCel;
}

let unidade = prompt("Digite a letra c ou f:");
let temp = prompt("Digite a temperatura que você quer converter:");
let resultado = conversao (unidade,temp);

console.log(resultado);
