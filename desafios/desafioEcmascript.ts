//1) Arrow function
const dobro = (valor: number): number => valor * 2    
console.log(dobro(10))

//2) Parâmetro padrão
const dizerOla = (nome: string = 'Pessoa'): void => console.log("Olá, " + nome)
dizerOla()
dizerOla("Anna")

//3) Operador spread
const numeros: number[] = [-3, 33, 38, 5]
console.log(Math.min(...numeros))

//4) Operador spread
const numerosV2: number[] = [-3, 33, 38, 5]
const array = [55, 20]
array.push(...numerosV2)
console.log(array)

//5) Destructuring em arrays
const notas: number[] = [8.5, 6.3, 9.4]
const [notas1, notas2, notas3] = notas
console.log(notas1, notas2, notas3)

//6) Destructuring em objetos
const cientista = {primeiroNome: 'Will', experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)