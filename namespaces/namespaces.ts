// namespace Geometria{
//   export namespace Area{
//     const PI = 3.14
    
//     export function circunferencia(raio: number): number{
//       return PI * Math.pow(raio, 2)
//     }
    
//     export function retangulo(base: number, altura: number): number{
//       return base * altura
//     }
//   }
// }

/*Utilizando a referência dos arquivos a serem utilizados na compilação do Typescript, sem precisar referenciá-los via
linha de comando tsc -w --outFile arquivoSaida.js arquivo1.ts, arquivo2.ts, ..., arquivoN.ts
Basta simplesmente referenciar com o comando tsc -w --outFile namespaces.js namespaces.ts*/
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>


// const PI = 2.99

console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(10, 20))

// console.log(PI)

/*Namespace é um espaço de nome, como se diz na tradução do inglês, que é utilizado para evitar conflito de nomes
que já tenham sido declarados anteriormente no escopo global (variáveis, métodos, classes, etc). Por padrão, uma 
vez que são definidas as variáveis, funções e classes, elas ficarão no escopo global. Para evitar conflito de 
nomes, Bastar criar um namespace, definir as classes, métodos e variáveis dentro dele, e exportar, com 
a palavra reservada 'export'*/
