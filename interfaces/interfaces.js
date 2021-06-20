"use strict";
/*Sem usar interfaces, percebe-se que nos parâmetros dos métodos sayHello e changeName houve uma duplicidade de tipos.
Para isso, utiliza-se interface para representar uma tipagem*/
// function sayHello(person: {name: string}){
//   console.log('Hello, ' + person.name)
// }
//Com interface
function sayHello(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Ana";
}
const person = {
    name: "Victor",
    age: 27,
    greet(lastName) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName);
    }
};
sayHello(person);
changeName(person);
sayHello(person);
// sayHello({name: 'Vanderson', age: 33, xyz: true, altura: 1.80})
// sayHello({name: 'Camilla', profissao: 'Dev pleno'})
person.greet('Mello');
//Interfaces x classes
class Client {
    constructor() {
        this.name = '';
        this.lastOrder = new Date;
    }
    greet(lastName) {
        console.log('Hello, my name is ' + this.name + ' ' + lastName);
    }
}
const myClient = new Client();
myClient.name = 'Han';
sayHello(myClient);
myClient.greet('Solo');
console.log(myClient.lastOrder);
let power; //Variável 'power' implementa a interface Calculus, que no caso representa uma função
power = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(power(2, 4));
console.log(power(10, 2));
console.log(power(25, 2));
class classA {
    methodA() { console.log('Método A da classe A'); }
}
class classB {
    methodA() { console.log('Método B da classe B'); }
    methodB() { console.log('Método A da classe B'); }
}
class classABC {
    methodA() { console.log('Método A da classe ABC'); }
    methodB() { console.log('Método B da classe ABC'); }
    methodC() { console.log('Método C da classe ABC'); }
}
function newFunction(b) {
    console.log('Este é um objeto do tipo interfaceB' + b);
}
newFunction(new classABC());
let objA = new classA();
let objB = new classB();
let objABC = new classABC();
objA.methodA();
objB.methodB();
objABC.methodA();
objABC.methodB();
objABC.methodC();
/*OBS: Em TypeScript, uma vez declarada uma classe abstrata que implementa interfaces, é obrigatório implementá-las,
ao contrário de outras linguagens como Java, que é opcional.*/
class AbstractABC {
    methodA() {
        console.log('Método A da classe abstrata ABC');
    }
    methodB() {
        console.log('Método B da classe abstrata ABC');
    }
}
class ConcreteABC extends AbstractABC {
    methodD() {
        console.log('Este é o método abstrato implementado da classe abstrata AbstractABC');
    }
}
let concABC = new ConcreteABC();
concABC.methodA();
concABC.methodB();
concABC.methodD();
//Usando interface para estender a classe Object
//Ex:
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 1;
const y = 2;
const z = 3;
x.log();
y.log();
z.log();
const cli = {
    name: 'Victor',
    toString() {
        return this.name;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map