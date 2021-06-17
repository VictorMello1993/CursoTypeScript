"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
const PI = 2.99;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
/*Namespace é um espaço de nome, como se diz na tradução do inglês, que é utilizado para evitar conflito de nomes
que já tenham sido utilizados anteriormente no escopo global. Por padrão, uma vez que são definidas as variáveis,
funções e classes, eles ficarão no escopo global.*/
//# sourceMappingURL=namespaces.js.map