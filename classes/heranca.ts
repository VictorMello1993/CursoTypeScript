//Herança
class Ferrari extends Carro{

  //Inicializando classe filha com construtor
  constructor(modelo: string, velocidadeMaxima: number){
    super('Ferrari', modelo, velocidadeMaxima) //A marca já será inferida pela classe pai
  }

  public acelerar(): number{
    return this.alterarVelocidade(20)
  }

  public frear(): number{
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 340)
console.log(`${f40.marca} ${f40.modelo}`)

//Acelerando a Ferrari de 20 em 20 30 vezes
console.log('Acelerando...')
Array(30).fill(0).forEach(() => console.log(f40.acelerar()))

//Freando a Ferrari de 10 em 10 50 vezes
console.log('Freando...')
Array(15).fill(0).forEach(() => console.log(f40.frear()))
