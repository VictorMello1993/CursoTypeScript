//Modificadores de acesso
class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {
    
  }

  // private alterarVelocidade(delta: number): number {
  //   const novaVelocidade = this.velocidadeAtual + delta;
  //   const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

  //   if(velocidadeValida){
  //     this.velocidadeAtual = novaVelocidade;
  //   }
  //   else{
  //     this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
  //   }

  //   return this.velocidadeAtual
  // }

  //Transmitindo o método alterarVelocidade para as classes filhas por herança com protected
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if(velocidadeValida){
      this.velocidadeAtual = novaVelocidade;
    }
    else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual
  }

  public acelerar(): number{
    return this.alterarVelocidade(5)
  }

  public frear(): number{
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Honda', 'Civic', 220)
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())
// console.log(carro1.acelerar())

//Acelerando o carro de 5 em 5 50 vezes, partindo do repouso
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

//Freando o carro 20 vezes
Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

//Modificadores de acesso (Encapsulamento)
//1 - public: Os atributos e os métodos são acessados em qualquer lugar do código fora da classe em que foram definidos.
//2 - private: Os atributos e os métodos são acessados somente dentro da própria classe em que foram definidos. Para isso, utiliza-se o 'this'.
//3 - protected: Os atributos e os métodos são acessados dentro da própria classe e as suas classes filhas, por meio de herança.

//OBS: Em TypeScript, por padrão, a omissão da palavra reservada 'public' indica que os atributos e os métodos são públicos.