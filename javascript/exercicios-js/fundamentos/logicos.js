function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // o simbolo de || (OU) é representatividade de ou pipe, se fosse usado um pipe ia ser uma comparação bit a bit
  const comprarTv50 = trabalho1 && trabalho2 // operador logico para representar o tipo "e" é o & operador chamado de curto cirquito
  //const comprarTv32 = !!(trabalho1 ^ trabalho2)  //bitwise do XOR
  const comprarTv32 = trabalho1 != trabalho2 // ou seja o ou exclusivo pode ser representado pelo "!=" diferente
  // de  trabalho com diferente aqui ele diz que se o valor for diferente um do outro ele vai comprar a TV
  const manterSaudavel = !comprarSorvete //operador unário negação logicá
  //no caso não vai ser comprado o sorvete se houver negação na primeira const
  return {
    comprarSorvete,
    comprarTv50,
    comprarTv32,
    manterSaudavel
  }
};

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));