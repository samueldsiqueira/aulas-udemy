const [a] = [10];
/* Prestar atenção onde os tokens estão sendo usados
 pois eles definem o que é que está sendo declarado*/
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
/*aqui tem operadores altamente relacionados
 com operador de atribuição*/
console.log(n1, n3, n5, n6);

//um array pode ter outros elementos de array no caso um dentro do outro.
//exemplo:

const [, [media, nota]] = [
  [, 8, 8],
  [9, 6, 8]
];
console.log(media, nota);