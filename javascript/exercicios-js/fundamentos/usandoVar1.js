{
  {
    {
      {
        var sera = 'Sera???'
      }
    }
  }
};
// a variavel var dentro de um bloco de código que não seja uma função (function ou arrow function)fica visivel fora do bloco
console.log(sera);


//outro exemplo com a função com uma variavel dentro do bloco
function teste() {
  var local = 123
  console.log(local)

};

teste(); // função
//console.log(local); // fora da função não executa pois está fora do escopo