//Construtor privado e singleton

/*Singleton: Padrão de projeto que permite trabalhar o controle de fluxo de dados com apenas uma única instância na 
aplicação. Normalmente é feito usando construtor privado.*/

class Unico{
  private static instance: Unico = new Unico
  private constructor(){}

  static getInstance(): Unico{
    return Unico.instance
  }

  agora(){
    return new Date().toLocaleDateString()
  }
}

/* let obj1 = new Unico() //ERRO! O Construtor é privado! 
É preciso controlar a forma como é instanciada a classe, por meio do método estático getInstance() que retorna uma instância 
única da classe*/

console.log(Unico.getInstance().agora())
// let v1 = Unico.getInstance()
// console.log(v1.agora())
