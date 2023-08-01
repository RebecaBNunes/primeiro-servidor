const { uniq } = require('lodash'); //desestruturar para usar apenas os métodos que serão necessários
const { numeros, letras } = require('./array');

console.log(letras);
console.log(numeros);

const numerosUnicos = uniq(numeros);
const letrasUnicas = uniq(letras);

console.log(numerosUnicos);
console.log(letrasUnicas);