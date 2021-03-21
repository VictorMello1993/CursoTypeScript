"use strict";
//1) Arrow function
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
//2) Parâmetro padrão
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    return console.log("Olá, " + nome);
};
dizerOla();
dizerOla("Anna");
//3) Operador spread
var numeros = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numeros));
//4) Operador spread
var numerosV2 = [-3, 33, 38, 5];
var array = [55, 20];
array.push.apply(array, numerosV2);
console.log(array);
//5) Destructuring em arrays
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0], notas2 = notas[1], notas3 = notas[2];
console.log(notas1, notas2, notas3);
//6) Destructuring em objetos
var cientista = { primeiroNome: 'Will', experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=desafioEcmascript.js.map