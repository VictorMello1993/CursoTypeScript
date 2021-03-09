// Tipos de dados do TypeScript

//String
let nome = 'Victor' //Inferência de tipos
console.log(nome)

// nome = 28 //ERRO! TypeScript é uma linguagem de tipagem estática, diferentemente do JavaScript que é uma liguagem de tipagem dinâmica! 
          // 'Nome' é do tipo string


//Number
let idade = 27
// idade = 'Ana' //ERRO! idade é do tipo Number, e não string

idade = 27.5
console.log(idade)

//Boolean
let possuiHobbies = false
// possuiHobbies = 1 //possuiHobbies! idade é do tipo boolean, e não Number
console.log(possuiHobbies)

// Tipos explícitos
let teste :any
teste = 'Victor'
teste = 27
teste = 'ABC'
console.log(teste)

//Declarar uma variável sem definir explicitamente o tipo indica que o tipo padrão do TypeScript é do tipo Any, que pode ser string, number, boolean, objeto ou de quaisquer tipos
let variavel2 :string
variavel2 = 'Olá, meu nome é Victor!'
// variavel2 = 27 ERRO! Como foi definida explicitamente como sendo tipo string, ela não admite valores que não sejam string
console.log(variavel2)

//Arrays
let hobbies :any[] = ['Jogar PC', 'Programar', 'Streamar']
console.log(hobbies[0]) //Saída: 'Jogar PC '

// hobbies = [100] //ERRO! O tipo inferido é do tipo array de strings, a menos que seja definido como sendo any[]
hobbies = [100, 200, 300]
console.log(hobbies[0]) //Saída: 100 (se definido como sendo do tipo any[])

//Tuplas
let endereco :[string, number, number] = ['Av. Principal', 31, 123]
console.log(endereco)

endereco = ['Bloco', 1, 62]
console.log(endereco)

//Enums
enum Cor{
    cinza,
    verde = 100,
    azul,
    vermelho, 
    ciano = 200,
    laranja,
    amarelo 
}

let minhaCor :Cor = Cor.verde
console.log(minhaCor)
console.log(Cor.azul)
console.log(Cor.vermelho)
console.log(Cor.laranja)
console.log(Cor.amarelo)

// Any
let carro :any = 'BMW'
console.log(carro)

carro = {cor: 'preto', ano: 2018}
console.log(carro)
