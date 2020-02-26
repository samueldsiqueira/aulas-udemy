//exemplo básico confusão entre json e objeto em java script
//ESSA AULA É PARA CRIAR OBJETOS EM JAVA SCRIPT DE FORMA LITERAL, ANOTAÇÃO LITERAL DE OBJETOS

const prod1 = {};
//forma literal para criar um objeto é com chaves {} é uma coleção de chave,valor, podendo ter um outro objeto dentro dele
prod1.nome = 'Celular Ultra Mega';
//esse nome foi criado dinamicamente dentro do objeto, aqui determino o que vai ter dentro desse objeto no caso o nome
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: 'camisa polo',
  preco: 79.90
};
prod2['Desconto Legal'] = 0.40;

console.log(prod2);