let valor; //nao inicializada
console.log(valor);

valor = null; // ausencia de valor sempre use esse valor para zerar a variavel
console.log(valor);
//console.log(valor.toString()); //erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite usar o valor undefined pois ele já é atribuido pelo JS
console.log(!!produto.preco);
//delete pdotudo.preco; se quiser tirar um atributo
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);