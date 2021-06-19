"use strict";
// Tipos de dados do TypeScript
//String
let nome = "Victor"; //Inferência de tipos
console.log(nome);
// nome = 28 //ERRO! TypeScript é uma linguagem de tipagem estática, diferentemente do JavaScript que é uma liguagem de tipagem dinâmica!
// 'Nome' é do tipo string
//Number
let idade = 27;
// idade = 'Ana' //ERRO! idade é do tipo Number, e não string
idade = 27.5;
console.log(idade);
//Boolean
let possuiHobbies = false;
// possuiHobbies = 1 //possuiHobbies! idade é do tipo boolean, e não Number
console.log(possuiHobbies);
// Tipos explícitos
let teste;
teste = "Victor";
teste = 27;
teste = "ABC";
console.log(teste);
//Declarar uma variável sem definir explicitamente o tipo indica que o tipo padrão do TypeScript é do tipo Any, que pode ser string, number, boolean, objeto ou de quaisquer tipos
let variavel2;
variavel2 = "Olá, meu nome é Victor!";
// variavel2 = 27 ERRO! Como foi definida explicitamente como sendo tipo string, ela não admite valores que não sejam string
console.log(variavel2);
//Arrays
let hobbies = ["Jogar PC", "Programar", "Streamar"];
console.log(hobbies[0]); //Saída: 'Jogar PC '
// hobbies = [100] //ERRO! O tipo inferido é do tipo array de strings, a menos que seja definido como sendo any[]
hobbies = [100, 200, 300];
console.log(hobbies[0]); //Saída: 100 (se definido como sendo do tipo any[])
//Tuplas
let endereco = ["Av. Principal", 31, 123];
console.log(endereco);
endereco = ["Bloco", 1, 62];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 100] = "verde";
    Cor[Cor["azul"] = 101] = "azul";
    Cor[Cor["vermelho"] = 102] = "vermelho";
    Cor[Cor["ciano"] = 200] = "ciano";
    Cor[Cor["laranja"] = 201] = "laranja";
    Cor[Cor["amarelo"] = 202] = "amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
console.log(minhaCor);
console.log(Cor.azul);
console.log(Cor.vermelho);
console.log(Cor.laranja);
console.log(Cor.amarelo);
// Any
let carro = "BMW";
console.log(carro);
carro = { cor: "preto", ano: 2018 };
console.log(carro);
//Funções com tipo de retorno
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
//Funções que não retornam nenhum valor (void)
function digaOi() {
    console.log("Oi");
}
digaOi();
//Funções com parâmetros
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//Tipo função
let calculo;
// calculo = digaOi //ERRO! A função digaOi não tem parâmetros do tipo number nem retorno do tipo number!
// calculo = {} //ERRO! A função cálculo é do tipo função e não um objeto
calculo = multiplicar;
console.log(calculo(5, 6));
//Objetos
let usuario = {
    nome: "Victor",
    idade: 27,
};
// usuario = {} //ERRO! Como a variável usuario é um objeto com as propriedades, não é possível atribuir um objeto vazio para a mesma variável
// usuario = { //ERRO! A variável do tipo objects deve respeitar os nomes dos atributos
//     name: 'Pedro',
//     age: 31
// }
//Union Types
let nota; //Essa variável só aceita valores do tipo number ou string. Isso é uma alternativa ao uso do tipo any, que aceita valores de qualquer tipo
nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "6.5";
console.log(`Minha nota é ${nota}!`);
/*Tipo Never => são tipos em que uma função nunca termina de executar corretamente, ou seja, que esteja em looping infinito
sem atingir o ponto de retorno, ao contrário do void, em que mesmo a função não possui retorno,
ela consegue terminar a execuçã com sucesso. Ou, essa função retorna um erro*/
//Cenário 1
function looping() {
    while (true) { }
}
//Cenário 2
function erro(msg) {
    throw new Error(msg);
}
const pessoa = {
    idade: -18,
    nome: "Victor",
    validarPessoa() {
        if (!this.nome || this.nome.trim().length == 0) {
            erro("É preciso ter um nome!");
        }
        if (this.idade <= 0) {
            erro("Idade inválida!");
        }
    },
};
// pessoa.validarPessoa()
//Tipo null
let valor = null; //Atribuindo null a uma variável infere como sendo tipo any
valor = 12;
console.log(valor);
valor = "teste";
console.log(valor);
const aluno1 = {
    nome: "Victor",
    tel1: "98547845",
    tel2: null,
};
console.log(aluno1.nome);
console.log(aluno1.tel1);
console.log(aluno1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Victor",
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map