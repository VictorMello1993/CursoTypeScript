"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Decorator
function logClass(constructor) {
    console.log(constructor);
}
//Função factory: funções que retornam decorators. Isso permite o uso dos parâmetros para manipular decorators
//Exemplo: 
/*Essa função também retorna decorator, mas não possui implementações.
Isso é para evitar erro de compilação do Typescript que não permite retornar o valor null
que é incompatível para a assinatura de uma função factory*/
function emptyDecorator(_) { }
//Função factory
function logClassIf(value) {
    return value ? logClass : emptyDecorator;
}
//Função factory
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//Modificando construtor de uma classe com os decorators, por meio de herança de classes decoradas
function logObject(constructor) {
    console.log('Carregando...'); //O decorator é sempre carregado apenas uma única vez
    return class extends constructor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// @logClass
// @decorator({a: 'Teste', b: 123})
// @logClassIf(true)
let classTestDecorator = class classTestDecorator {
    constructor() {
        console.log('novo...');
    }
};
classTestDecorator = __decorate([
    logObject,
    printable
], classTestDecorator);
//Adicionando novos métodos no protótipo de uma classe utilizando decorators
//Ex:
function printable(constructor) {
    constructor.prototype.print = function () {
        console.log(this);
    };
}
// new classTestDecorator()
// new classTestDecorator()
// new classTestDecorator()
// new classTestDecorator().print() //ERRO! O Typescript não consegue inferir o que está contido na classe classTestDecorator
// (<any>new classTestDecorator()).print() //Solução 1 para erro descrito na linha 66 (uso do typecast para ignorar a validação da classe - não recomendável)
//Solução 2 para erro descrito na linha 66 (uso da interface -> vide linha 40)
const obj1 = new classTestDecorator();
obj1.print && obj1.print();
obj1.print && obj1.print();
//Solução 3: utilizar o tipo generic que seja do tipo Constructor
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE MÉTODO
//Ex:
class CheckingAccount {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(value) {
        // if(value <= this.balance){
        this.balance -= value;
        // }
    }
    getBalance() {
        return this.balance;
    }
}
__decorate([
    nonNegativeValue
], CheckingAccount.prototype, "balance", void 0);
__decorate([
    freeze,
    __param(0, paramInfo)
], CheckingAccount.prototype, "withdraw", null);
__decorate([
    freeze
], CheckingAccount.prototype, "getBalance", null);
const cc = new CheckingAccount(5000.25);
cc.withdraw(2000);
// cc.withdraw(2000)
// cc.withdraw(2000)
// cc.withdraw(2000)
console.log(cc.getBalance());
//ERRO! Usuário mal intencionado consegue acessar o atributo privada! Solução: decorator de método que proteja contra o acesso indevido de atributos privados
// cc.getBalance = function(){
//   return this['saldo'] + 7000
// }
// console.log(cc.getBalance())
function freeze(target, methodName, descriptor) {
    console.log(target);
    console.log(methodName);
    descriptor.writable = false; //Essa configuração faz com que o usuário não consiga modificar a propriedade privada
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE ATRIBUTO
function nonNegativeValue(target, propertyName) {
    delete target[propertyName];
    Object.defineProperty(target, propertyName, {
        get: function () {
            return target['_' + propertyName];
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Saldo inválido');
            }
            else {
                target['_' + propertyName] = value;
            }
        }
    });
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE PARÂMETRO
function paramInfo(target, methodName, paramIndex) {
    console.log(`Target: ${target}`);
    console.log(`Method: ${methodName}`);
    console.log(`Index: ${paramIndex}`);
}
//# sourceMappingURL=decorators.js.map