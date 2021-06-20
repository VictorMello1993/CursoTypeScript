function echo(object: any){
  return object
}

console.log(echo('Victor').length)
console.log(echo(27))
console.log(echo(27).length) //Retornará undefined pois além do tipo number não possuir length, o compilador do Typescript não detectou erros de compilação pois o parâmetro e o tipo de retorno é do tipo any
console.log(echo({name: 'Victor', age: 27}))

//Usando generics
function echoV2<T>(object: T): T{
  return object
}

console.log(echoV2('Victor').length) //O tipo T agora assume que o valor passado é do tipo string
console.log(echoV2(27)) //O tipo T agora assume que o valor passado é do tipo number
// console.log(echoV2(27).length) //Agora o compilador volta a criticar, pois foi definido que o tipo T do generics passa a ser do tipo number, e o mesmo não possuir propriedade length
console.log(echoV2({name: 'Victor', age: 27})) //O tipo T agora que o valor passado é do tipo Object

console.log(echoV2<number>(27)) /*No momento que a função echoV2 é executado, o tipo genérico é inferido, ou seja,
                                  se for especificado o tipo T na chamada da função, tudo que estiver definido como
                                  tipo T, seja o tipo do parâmetro ou o tipo de retorno, será substituído pelo 
                                  tipo especificado.*/

//Generics envolvendo arrays                                  
//Generics disponíveis no Typescript
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5') //ERRO! Foi especificado como sendo array de number!

console.log(avaliacoes)
function print<T>(args: T[]){
  args.forEach(e => console.log(e))
}

print([1, 2, 3])
print<number>([1, 2, 3])
print<string>(['Victor', 'Pedro', 'Ana'])

print<{name: string, age: number}>([
  {name: 'Fulano', age: 22},
  {name: 'Ciclano', age: 23},
  {name: 'Beltrano', age: 24}
])
//Ou
type Student = {name: string, age: number}
print<Student>([
  {name: 'Fulano', age: 22},
  {name: 'Ciclano', age: 23},
  {name: 'Beltrano', age: 24}
])

//Generics com tipo função
// const callEcho: <T>(data:T) => T = echoV2
// console.log(callEcho<string>('Alguma coisa'))
//Ou
type Echo = <T>(data:T) => T 
const callEcho: Echo = echoV2
console.log(callEcho<string>('Alguma coisa'))
