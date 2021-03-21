"use strict";
//Alguns recursos do Ecmascript que são compatíveis do JavaScript junto com TypeScript
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//let & const
//No ES5, só existia variáveis do tipo var, que corresponde ao escopo global do navegador (window) ou do módulo (Node)
//Exemplo 1:
// console.log(seraQuePode)
// let seraQuePode = '?' /*Se declarar e atribuir uma variável var depois de ter sido usada antes, 
// no contexto JavaScript dará undefined, técnica chamada de 'hoisting', típicos em variáveis var.
// No contexto TypeScript, é preciso declarar uma variável antes de ser utilizada*/
/*Trocando para let, se o target for 'es5', será gerado um arquivo .js substituindo let ou const pelo var, mas trocando o
targer para 'es6', será gerado um arquivo com variáveis let e const do mesmo jeito que está no TypeScript*/
//Exemplo 2:
var estaFrio = true;
if (estaFrio) {
    // var acao = 'Colocar casaco!'
    var acao = 'Colocar casaco!';
    console.log(acao);
}
// console.log(acao)
//Neste caso, no contexto Js, a variável 'acao' como sendo do tipo var, será acessível em todo escopo global da aplicação
//Porém, se fosse do tipo let, dará erro, pois é uma variável de escopo de bloco, ou seja, só é acessível dentro do bloco do código
var cpf = '126456000-99';
// cpf = '7890123456-44' //ERRO! atribuição a uma constante
console.log(cpf);
//Exemplo 3
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno!';
    console.log(segredo);
}
revelar();
console.log(segredo);
//Exemplo 4
{
    {
        var def = 'def';
        console.log(def);
    }
}
// console.log(def) //Erro! const só é acessível dentro da função ou de um bloco, da mesma forma para variáveis do tipo let
//Exemplo 5:
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i) //Erro! let só é acessível dentro de um bloco ou da função
//Resumindo: - Variáveis que são do tipo var, possuem escopo local (função e bloco) e escopo global (visível por todo o código)
//           - Variáveis que são do tipo let e const só possuem escopos locais (função e bloco), e não são acessíveis por fora
//----------------------------------Função arrow------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var saudacao = function (pessoa) { return console.log('Olá, ' + pessoa); };
/*Em TypeScript, se uma função arrow tiver só um parâmetro, ao contrário no JavaScript,
é preciso colocá-lo entre parênteses e especificá-lo o tipo*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------This - Função normal x função arrow----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function normalComThis(){
//     console.log(this)
// }
// const normalComThisEspecial = normalComThis.bind({nome: 'Victor'})
// normalComThisEspecial()
// console.log(this) //O this no contexto no qual a função arrow é definida será o window
// const arrowComThis = () => console.log(this) //O this será o window
// arrowComThis()
// const arrayComThisEspecial = arrowComThis.bind({nome: 'Pedro'})
// arrayComThisEspecial() //O this continua sendo o window, e não o objeto
//O this para uma função normal varia de acordo com o contexto no qual a função foi definida ou chamada
//Porém, para uma função arrow, o this nunca varia
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------Parâmetros padrão----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva(3);
//----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------Operador spread e rest----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var numbers = [1, 10, -99, -20];
console.log(Math.max.apply(Math, numbers)); //Spread => desmembra (espalha) o array em elementos individuais
//Outro exemplo de uso de operador spread
var turmaA = ['Victor', 'João', 'Maria', 'Camilla'];
var turmaB = __spreadArray(__spreadArray(['Fernando'], turmaA), ['Lorena', 'Miguel']);
console.log(turmaB); //Saída: array de string com 7 elementos
//Exemplo operador rest
function retornaArray(num) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(num);
    return args;
}
var nums = retornaArray(1, 2, 3, 4, 300, 400, 625);
console.log(nums);
/*OBS: é possível misturar mais de um parâmetro quando se tem operador rest,
mas só é possível se operador rest for pelo menos o segundo ou último parâmetro, independente do tipo de dado que for.
Do contrário, dará erro de compilação, assim como dará erro no Js*/
//Spread e Rest (tuplas)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
//Usando spread na tupla => Desmembrar array em elementos individuais
tuplaParam1.apply(void 0, tupla);
//Usando rest na tupla => Agrupar elementos individuais em um array
tuplaParam2(1, 'abc', false);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------Operador destructuring----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Destructuring (array)
var fichaPessoa = [1993, 'Rio de Janeiro', 'Programador Jr', true];
//Forma tradicional
// const anoNascimento = fichaPessoa[0]
// const cidade = fichaPessoa[1]
// const profissao = fichaPessoa[2]
// const formado = fichaPessoa[fichaPessoa.length - 1]
// console.log(anoNascimento, cidade, profissao, formado)
//Com destructuring
var anoNascimento = fichaPessoa[0], cidade = fichaPessoa[1], profissao = fichaPessoa[2], formado = fichaPessoa[3];
console.log(anoNascimento, cidade, profissao, formado);
//Destructuring (objetos)
var produto = {
    nome: 'GeForce RTX 3090',
    preco: 10000,
    caracteristicas: {
        w: 'Importado' //Atributo aninhado
    }
};
//Forma tradicional
// const nomeItem = produto.nome
// const preco = produto.preco
// const caracteristicas = produto.caracteristicas.w
// console.log(`Nome: ${nomeItem} - Preço: ${preco}`)
//Com destructuring
var nomeItem = produto.nome, preco = produto.preco, w = produto.caracteristicas.w;
console.log();
console.log("Nome: " + nomeItem + " - Pre\u00E7o: " + preco + ", - Caracter\u00EDsticas: " + w);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=ecmascript.js.map