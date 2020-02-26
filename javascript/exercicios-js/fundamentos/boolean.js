let isAtivo = false;
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1;
/* não é um valor booleano é
 um valor numerico, como fazer
  para transformar em valor booleano?
usa a negação.*/
console.log(!!isAtivo); // a "!!" duplo negativo virifica se o valor representado é positivo ou falso

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'epa'));
console.log(('' || null || 0 || '' || 123)); // ele retorna com o unico valor verdadeiro da string

let nome = '';
console.log(nome || 'desconhecido');