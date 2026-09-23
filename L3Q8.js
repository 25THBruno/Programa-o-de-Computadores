const prompt = require('prompt-sync')();

let idade1 = Number(prompt('insira a primeira idade: '))
let idade2 = Number(prompt('insira a segunda idade: '))

let maioridade = (idade1 >=18) || (idade2 >=18) ? true : false
console.log(maioridade)