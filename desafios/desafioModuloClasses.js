"use strict";
// // Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0
//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }
//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
// // Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//   return this.base * this.altura
// }
// console.log(retangulo.area())
// // Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//       return this._primeiroNome
//   },
//   set: function (valor) {
//       if (valor.length >= 3) {
//           this._primeiroNome = valor
//       } else {
//           this._primeiroNome = ''
//       }
//   },
//   enumerable: true,
//   configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
//Transformar o código JS acima em código TS
//1) 
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooooooot');
    }
    acelerar(delta) {
        this.velocidade += delta;
    }
}
var moto = new Moto('Kawazaki');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
//2) Herança
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.base = base;
        this.altura = altura;
    }
}
class retangulo extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const r1 = new retangulo(4, 5);
r1.base = 10;
console.log(r1.area());
//3)
class estagiario {
    constructor() {
        this._primeiroNome = '';
        this.enumerable = true;
        this.configurable = true;
    }
    get PrimeiroNome() {
        return this._primeiroNome;
    }
    set PrimeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const e1 = new estagiario();
e1.PrimeiroNome = 'Victor';
console.log(e1.PrimeiroNome);
e1.PrimeiroNome = 'Vc';
console.log(e1.PrimeiroNome);
//# sourceMappingURL=desafioModuloClasses.js.map