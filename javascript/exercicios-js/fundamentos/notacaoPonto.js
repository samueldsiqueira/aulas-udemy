console.log(Math.ceil(6.1)); // Operar um aredondamento, ele arredonda para cima

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola'; aqui é diferente da notação ponto evitar usar essa, pois a notação ponto é uma boa pratica

console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome
}; // this vai tornar a função pública para todo o escopo

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('mesa');

console.log(obj2.nome);
console.log(obj3.nome);