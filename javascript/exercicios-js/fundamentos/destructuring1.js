// novo recurso do ES2015
const pessoa = {
  nome: 'Ana',
  idade: '5',
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
};

const {
  nome,
  idade
} = pessoa;
// as {} (chaves)  representam o operador destructuring
console.log(nome, idade);

//ou

const {
  nome: n,
  idade: i
} = pessoa;
console.log(n, i);
/* dessa forma abreviamos a variavel
 declarada para facilitar na declaração*/


//atributo que não existe no objeto:
const {
  sobrenome,
  bemHumorada = true
} = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: {
    logradouro,
    numero,
    cep
  }
} = pessoa;
console.log(logradouro, numero, cep);

/*tomar cuidado ao tentar acessar um 
dado aninhado, tem de ter certeza 
se o caminho declarado está setado somente o ultimo pode estar faltando.*/