//Atributos e métodos estáticos
class Matematica{
  static PI: number = 3.1416

  static areaCirc(raio: number): number{
    return Matematica.PI * raio * raio
  }
}

// const m1 = new Matematica()
// console.log(m1.areaCirc(4))

//Acessando o método estático, que pertence à própria classe e não a uma instância daquela classe
console.log(Matematica.areaCirc(4))

/*Para declarar um atributo e método estáticos, utiliza-se a palavra reservada `static`.
Isso indica que os atributos e métodos são acessíveis diretamente no nível da classe, e não no nível
da instância de uma classe*/