var numero = 1; //escopo global
{
  let numero = 2 // ele atende somente ao escopo, no caso fora do objeto ele não vai imprimir
  console.log('dentro =', numero) // essa concatenação da preferencia do escopo menor
};
console.log('fora =', numero);