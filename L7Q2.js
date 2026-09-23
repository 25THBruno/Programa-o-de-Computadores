const prompt = require('prompt-sync')();

let dias = Math.abs(number(prompt("Digite o total de dias ")));
let km = Math.abs(number(prompt("Digite o total de quilometros ")));

let excedente = Math.max(0, km - dias * 100);
let valor = dias * 90 + excedente *12;

console.log("O valor gasto foi: R$ " + valor);
