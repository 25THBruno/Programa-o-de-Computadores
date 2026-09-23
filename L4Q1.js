const prompt = require('prompt-sync')();

function conversor (f1){
    let celsius = (f1-32) * 5/9
    console.log("A temperatura é ", celsius);
    return celsius
}

let temp = conversor (1)





