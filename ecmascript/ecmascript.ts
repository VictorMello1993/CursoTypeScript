//Alguns recursos do Ecmascript que são compatíveis do JavaScript junto com TypeScript

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
let estaFrio = true
if(estaFrio){
    // var acao = 'Colocar casaco!'

    let acao = 'Colocar casaco!'
    console.log(acao)
}
// console.log(acao)
//Neste caso, no contexto Js, a variável 'acao' como sendo do tipo var, será acessível em todo escopo global da aplicação
//Porém, se fosse do tipo let, dará erro, pois é uma variável de escopo de bloco, ou seja, só é acessível dentro do bloco do código

const cpf: string  = '126456000-99'
// cpf = '7890123456-44' //ERRO! atribuição a uma constante
console.log(cpf)

//Exemplo 3
var segredo = 'externo!'
function revelar(){
    const segredo = 'interno!'
    console.log(segredo)
}
revelar()
console.log(segredo)

//Exemplo 4
{
 {
    const def = 'def'
    console.log(def)
 }
}
// console.log(def) //Erro! const só é acessível dentro da função ou de um bloco, da mesma forma para variáveis do tipo let

//Exemplo 5:
for(let i = 0; i < 10; i++){
    console.log(i)
}
// console.log(i) //Erro! let só é acessível dentro de um bloco ou da função

//Resumindo: - Variáveis que são do tipo var, possuem escopo local (função e bloco) e escopo global (visível por todo o código)
//           - Variáveis que são do tipo let e const só possuem escopos locais (função e bloco), e não são acessíveis por fora


//Função arrow
const saudacao = (pessoa: string) => console.log('Olá, ' + pessoa)

/*Em TypeScript, se uma função arrow tiver só um parâmetro, ao contrário no JavaScript, 
é preciso colocá-lo entre parênteses e especificá-lo o tipo*/

//This - Função normal x função arrow
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

//Parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void{
    console.log(inicio)
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}

contagemRegressiva(3)