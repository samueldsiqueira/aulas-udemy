console.log(typeof Object); // é uma função
console.log(typeof new Object); // é um objeto pois a função foi instanciada

const Client = function () {};
console.log(typeof Client);
console.log(typeof new Client);

class Produto {}; //ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto);


// O que é instanciada???