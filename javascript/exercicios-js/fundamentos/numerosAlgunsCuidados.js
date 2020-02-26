console.log(7 / 0); //operação fracamente tipada
console.log('10' / 2); //fracamente tipada, pois se o número não for inteiro ocorre erro
console.log('show!' * 2); // em outras linguagens o resultado seria "show show"
console.log(0.1 + 0.7); //não suportado pelo javascript
//console.log(10.toString()); não consegue fazer essa operação
console.log((10.345).toFixed(2));
console.log('3' + 2) //cuidado pois vai ser concatenado, vai transformar o numero 32