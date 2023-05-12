// const modulo = require("./moduloExemplo");
// modulo.executa();
// modulo.escreve();
// modulo.oculta();

// const { executa, escreve, oculta } = require("./moduloExemplo");
// executa();
// escreve();
// oculta();

// const somar = require("./moduloSomar");
// console.log(somar(10, 2));

// const analisarVelocidade = require("./moduloVelocidade");
// console.log(analisarVelocidade(12, 10));

const usuarioGithub = require("./moduloGithub");
usuarioGithub("leoarena")
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
