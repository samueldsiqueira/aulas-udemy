const peso1 = 1.0;
const peso2 = Number('2.0'); // verificado que 2.0 é um numero inteiro se fosse 2.1 ou mais não seria

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // para saber se é numero inteiro ou nao isInteger
console.log(Number.isInteger(peso2)); //para saber se é numero inteiro ou nao isInteger

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

console.log(avaliacao1, avaliacao2);
console.log(Number.isInteger(avaliacao1));
console.log(Number.isInteger(avaliacao2));

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2)); //toFixed (nº) diz o quantos numeros vao aparecer
console.log(media.toString(2)); // tranforma em binário
console.log(typeof media);
console.log(typeof Number);