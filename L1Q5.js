const prompt = require('prompt-sync')();
let numero1 = prompt('Digite o primeiro número: ')
if (numero1 % 2 == 0){
    console.log("0 número ", numero1, " é par")
}
else{
    console.log("O número ", numero1, "é ímpar" )
}
