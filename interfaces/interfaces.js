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
//# sourceMappingURL=interfaces.js.map