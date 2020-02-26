//Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}; //função anonima sem nome

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variavel
//Ter uma forma reduzida de construir uma função
const soma = (a, b) => {
  return a + b
}; // Essa seta => subistitui o nome function

console.log(soma(2, 3));

//Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!') //possibilidade de diminuir ainda mais uma arrow function