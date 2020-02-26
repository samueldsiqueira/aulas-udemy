const escola = "Cod3r";

console.log(escola.charAt(4)); // pega um determinado caractere dentro da string
console.log(escola.charAt(5)); // pega um determinado caractere dentro da string
console.log(escola.charCodeAt(3)); //retorna o valor da tabela unicode
console.log(escola.indexOf('3')); // pegou apartir de um caractere o indice dele
console.log(escola.substring(1)); // executamos 2 chamas o inicial.
console.log(escola.substring(0, 3)); // e passando o inicial e o final
console.log('Escola '.concat(escola).concat('!')); //concatena o declarado com a constante mais outro declarado
console.log('Escola ' + escola + '!'); // concatenando de outra forma com operador aritimético
console.log(escola.replace(3, 'e')); // ele vai pegar o valor declarado primeiramente e substituir pelo 'e'
console.log(escola.replace(/\d/, 'e')); // "/\d/" indica para substituir todos os digitos(números) dentro do texto pela letra 'e'
console.log(escola.replace(/\w/g, 'e')); // "/\d/g(global)" indica para substituir todas as letras e digitos dentro do texto pela letra 'e'
console.log('Ana, Maria, Pedro'.split(',')) //converter em  array
console.log('Ana, Maria, Pedro'.split(/,/)) //pode ser subistituido por um regex(regular expression)