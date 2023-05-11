// const modulo = require("./moduloExemplo");

// modulo.executa();
// modulo.escreve();
// modulo.oculta();

const { executa, escreve, oculta } = require("./moduloExemplo");

executa();
escreve();
oculta();

const somar = require("./moduloSomar");

let value = somar(10, 2);
console.log(value);

const analisarVelocidade = require("./moduloVelocidade");

console.log(analisarVelocidade(12, 10));
