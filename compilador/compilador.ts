//Opção noEmitOnError => opção que permite o compilador gerar arquivo .js mesmo existindo erros no código .ts 
//Ex: atribuição inválida
let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome:string = 'Victor' //Erro! A variável foi redeclarada com o mesmo nome que já existe em outro arquivo, ou seja, estão no mesmo escopo (namespace)

nome = 'Victor'
console.log(`Nome = ${nome}`)


//Target => indica a versão do JavaScript que será utilizado no arquivo compilado. Por padrão, a versão é 'es5'
//sourceMap => Irá gerar um arquivo .map, que seria um arquivo de código do JavaScript original interpretado pelo navegador 
