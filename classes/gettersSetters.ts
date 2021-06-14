//Getters e Setters

class Pessoa {
  private _idade: number = 0 //O uso do _ indica que o atributo de um objeto (no contexto JS) é privado

  public get idade(): number{
    return this._idade
  }

  public set idade(valor){
    this._idade = valor
  }
}

const p1 = new Pessoa()
p1.idade = 27 //Chamando o getter implicitamente
console.log(p1.idade)

p1.idade = 10 //Chamando o setter implicitamente
console.log(p1.idade)

/*Em algumas linguagens como C# e Java, é muito comum utilizar o 
conceito de propriedade, onde, em vez de chamar explicitamente 
o método get() e set() para deixar o código mais verboso, 
basta acessar como referência do get() e set() como se estivesse
acessando um atributo normal de uma classe*/
