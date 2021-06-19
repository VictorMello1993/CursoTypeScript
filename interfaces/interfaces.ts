/*Sem usar interfaces, percebe-se que nos parâmetros dos métodos sayHello e changeName houve uma duplicidade de tipos.
Para isso, utiliza-se interface para representar uma tipagem*/
// function sayHello(person: {name: string}){
//   console.log('Hello, ' + person.name)
// }

// function changeName(person: {name: string}){
//   person.name = 'Ana'
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
interface Person {
  name: string,
  age?: number //Atributo opcional, através da interrogação (?),
  [prop: string]: any //Atributo dinâmico (não se sabe o nome nem o tipo do atributo) com colchetes [] para representar uma notação de array
  greet(lastName: string): void
}

//Com interface
function sayHello(person: Person) {
  console.log("Hello, " + person.name);
}

function changeName(person: Person) {
  person.name = "Ana";
}

const person: Person = {
  name: "Victor",
  age: 27,
  greet(lastName: string){
    console.log('Hello, my name is ' + this.name + ' ' + lastName);    
  }
};

sayHello(person);
changeName(person);
sayHello(person);

// sayHello({name: 'Vanderson', age: 33, xyz: true, altura: 1.80})
// sayHello({name: 'Camilla', profissao: 'Dev pleno'})

person.greet('Mello')

//Interfaces x classes
class Client implements Person{
  name: string = ''
  greet(lastName: string){
    console.log('Hello, my name is ' + this.name + ' ' + lastName)
  }
  lastOrder: Date = new Date 
} 

const myClient = new Client()
myClient.name = 'Han'
sayHello(myClient)
myClient.greet('Solo')
console.log(myClient.lastOrder)