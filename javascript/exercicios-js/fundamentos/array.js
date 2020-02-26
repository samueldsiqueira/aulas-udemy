/* 
o array é heterogeneo (aceita multiplos valores) por ser fracamente tipado
, dentro do espaço pode por qualquer coisa e ele
 cresce e diminui de uma maneira bem flexivel, porem não é uma boa pratica*/

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); //como não existe ele retorna valor undefined, pode gerar algum dano colateral no sistema

valores[4] = 10; //caso pule do item 4 para o 10 como: valores[10] = 10 o sistema iria indicar que tem valores vazios
console.log(valores);
console.log(valores.length);
valores.push({
  id: 3
}, false, null, 'teste'); //esse metodo "push" serve para adicionar novos elementos no "array"
console.log(valores);

console.log(valores.pop()); //função pop pega o ultimo valor do array e remove no caso é o teste(texto).
delete valores[0]; //A função delete apaga dado determinando a posição do item no array e indica que aquele local está vazio.
console.log(valores); //retorna <1 empty item>

console.log(typeof valores); // mostra que o array é um objeto