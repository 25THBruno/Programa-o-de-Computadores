const prompt = require('prompt-sync')();

function conversor (c1){
    let fahren = c1 * 1.8 + 32
    console.log("A temperatura é ", fahren);
    return fahren
}

let temp = conversor (1)