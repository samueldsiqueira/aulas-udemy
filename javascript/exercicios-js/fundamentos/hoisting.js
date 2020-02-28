//hoisting é o içamento de código, ocorre em VAR por exemplo:
console.log('a =', a);
var a = 2;
console.log('a =', a);
//no hoisting o javascript le o código assim:
var a
console.log('a =', a);
a = 2
console.log('a =', a);
//caso fosse uma variável declarada em uma função ficaria assim:
function teste() {
  console.log('a =', a);
  var a = 2;
  console.log('a =', a);
}

teste();
//O efeito de içamento (hoisting) não ocorre com LET:

// console.log('b =', b); 
// Essa declaração ira causar erro no momento da execução do código   
let b = 2;
console.log('b =', b);