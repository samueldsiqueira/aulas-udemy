//Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
};

imprimirSoma(2, 3);
imprimirSoma(2); // sem o valor vai dar NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
// mais valores ele ignora o restante que não ta determinado na função e soma apenas A e B como foi declarado



//Função com retorno
function soma(a, b = 0) {
  return a + b
};

console.log(soma(2, 3));
console.log(soma(2)); // O valor de B já foi declarado na função
console.log(soma()); // aqui ele tenta somar undefined com 0 e informa que não é um numero NaN


//ela executa um processo baseado em uma ação
//bloco de codigo nomeado