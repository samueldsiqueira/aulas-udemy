const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2; // o resto da divisão

console.log(soma, subtracao, multiplicacao, divisao, modulo);
// sempre tem dois operando, sitaxe conhecida como infix
/* 
d++ - post fix fica depois do operando
++d - pré fix vem antes do operando
op1 + op2 - infix operando um + operando 2
-a isso é um operador binário, opera em cima de 
um unico operando*/