//Classes abstratas
abstract class Calculo{
  protected resultado: number = 0

  /*Método abstrato, que só possui assinatura e retorno. Ela não pode ter implementação na classe abstrata, a não ser que a mesma seja herdada 
  pelas classes filhas.*/
  abstract executar(...nums: number[]):void

  //Método concreto, que pode ter implementação mesmo dentro de uma classe abstrata
  getResultado(): number{
    return this.resultado
  }
}

class Soma extends Calculo{
  executar(...nums: number[]): void {
    this.resultado = nums.reduce((total, valorAtual) => total + valorAtual)
  }
}

class Multiplicacao extends Calculo{
  executar(...nums: number[]): void {
    this.resultado = nums.reduce((total, valorAtual) => total * valorAtual)
  }
}

let c1 = new Soma()
c1.executar(4,5,9)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(4,5,9)
console.log(c1.getResultado())

/* Uma classe abstrata pode ter nenhum ou vários métodos abstratos, assim como pode possuir métodos concretos. A diferença é que na classe abstrata, 
não é permitido instanciá-la diretamente. Os métodos abstratos não podem ter corpo, somente a assinatura. Para que seja possível o acesso à
implementação destes métodos, é preciso declarar variáveis de instância por meio de herança, onde cada classe filha possui um comportamento diferente,
embora todo objeto deve possuir tais métodos*/
