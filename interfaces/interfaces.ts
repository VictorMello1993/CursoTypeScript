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

//Interface x tipo função
interface Calculus {
  (num1: number, num2: number) : number
}

let power: Calculus //Variável 'power' implementa a interface Calculus, que no caso representa uma função

power = function(base: number, exp: number): number{
  return base ** exp
}

console.log(power(2, 4))
console.log(power(10, 2))
console.log(power(25, 2))

//Herança com interfaces
interface interfaceA {
  methodA(): void
}

interface interfaceB {
  methodB(): void
}

interface ABC extends interfaceA, interfaceB {
  methodC(): void
}

class classA implements interfaceA {
  methodA(): void {console.log('Método A da classe A')}
}

class classB implements interfaceA, interfaceB  {
  methodA(): void {console.log('Método B da classe B')}
  methodB(): void {console.log('Método A da classe B')}
}

class classABC implements ABC{
  methodA(): void {console.log('Método A da classe ABC')}
  methodB(): void {console.log('Método B da classe ABC')}
  methodC(): void {console.log('Método C da classe ABC')}
}

function newFunction(b: interfaceB) {
  console.log('Este é um objeto do tipo interfaceB' + b)
}

newFunction(new classABC())

let objA = new classA()
let objB = new classB()
let objABC = new classABC()

objA.methodA()
objB.methodB()
objABC.methodA()
objABC.methodB()
objABC.methodC()

/*OBS: Em TypeScript, uma vez declarada uma classe abstrata que implementa interfaces, é obrigatório implementá-las,
ao contrário de outras linguagens como Java, que é opcional.*/
abstract class AbstractABC implements interfaceA, interfaceB{
  methodA(): void {
    console.log('Método A da classe abstrata ABC')
  }

  methodB(): void {
    console.log('Método B da classe abstrata ABC')
  }

  abstract methodD(): void
}

class ConcreteABC extends AbstractABC{
  methodD(): void {
    console.log('Este é o método abstrato implementado da classe abstrata AbstractABC')
  }
}

let concABC = new ConcreteABC();
concABC.methodA()
concABC.methodB()
concABC.methodD()

//Usando interface para estender a classe Object
//Ex:
Object.prototype.log = function(){
  console.log(this.toString())
}

const x = 1
const y = 2
const z = 3

x.log()
y.log()
z.log()

/*No exemplo acima, a função log() só funciona no contexto do Javascript. No contexto de Typescript, essa função não
está disponível mesmo que conheça a classe Object e a herança de protótipo como ocorre no Javascript. Para resolver isso,
utiliza-se uma interface para adicionar essa função.*/
interface Object{
  log(): void
}

const cli = {
  name: 'Victor', 
  toString(){
    return this.name
  }
}

cli.log()

