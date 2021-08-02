//Integrando Jquery ao Typescript
$('body').append('Usando jQuery')

//É preciso instalar as tipagens do JQuery ao TypeScript para reconhecer o símbolo $ (solução definitva)

//Várias técnicas para resolução de problemas de integração de bibliotecas com Typescript:
//1) Usando 'declare'. Porém isso não resolve o problema de tipagens internas
//2) Isolar a declaração de tipagens em um arquivo de definição de biblioteca .d.ts
        //Essa técnica além de declarar uma variável raíz da biblioteca, é útil para definir as funções, parâmetros de entrada e retorno, etc...
//3) Instalar as tipagens já definidas com o comando npm i --save-dev @types/jquery (melhor solução). Isso é comum em bibliotecas que são do tipo biblioteca de mercado       

// Referências: 
// https://microsoft.github.io/TypeSearch/ Busca por biblioteca para resolução de tipagens
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html Como integrar biblioteca que é escrita puramente em JS para TS
