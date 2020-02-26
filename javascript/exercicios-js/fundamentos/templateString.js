const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
// como fazer isso em uma template string?
const template = `
  Olá
  ${nome}!`; // isso é um templatestring que considera as quebras de linha espaços e etc
console.log(concatenacao, template);

//expressões

console.log(`1+1=${1+1}`);
// ele não considera a expressão console.log(`1+1= somente o que está após o simbolo e entre chaves ${1+1}`)

const up = texto => texto.toUpperCase(); // criando uma função arrow sentro atribuida a variavel no caso a UP.

console.log(`Ei... ${up('cuidado')}!`);
// Aqui o codigo vai usar a função arrow para deixar a palavra em maiúsulo dentro de uma template string
// As backticks(``) são delimitações de um template string no caso quando uso ascentuação grave