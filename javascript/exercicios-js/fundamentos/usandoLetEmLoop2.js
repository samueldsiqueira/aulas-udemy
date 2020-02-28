const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
};

funcs[2]();
funcs[8]();

//isso funciona pois é um conceito de js closer, onde uma função tem conciencia do local onde ela foi definida.