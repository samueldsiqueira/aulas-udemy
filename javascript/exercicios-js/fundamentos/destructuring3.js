// dois exemplos com objeto e array
function rand({
  min = 0,
  max = 1000
}) {
  const valor = Math.random() * (max - min) + min //Math.random() Retorna um número pseudo - aleatório entre 0 e 1
  return Math.floor(valor) //Math.floor(x) Retorna o maior inteiro que é menor ou igual a um número.
};
const obj = {
  max: 50,
  min: 40
};
console.log(rand(obj));
console.log(rand({
  min: 955
})); //podemos passar apenas o valor de minimo ou maximo
console.log(rand({}));
/*console.log(rand()); sem objeto informado ele vai tentar
 passar algo que está undifined ou null.*/