const prompt = require('prompt-sync')();
let numero1 = prompt('Digite o primeiro número: ')
let numero2 = prompt('Digite o segundo número: ')
let maior = Math.max(numero1, numero2)
console.log("O maior número é: ", maior)