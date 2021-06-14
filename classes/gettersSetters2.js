//Usando getters e setters de um objeto literal
const pessoa = {
  _idade: 0, //O uso do _ indica que o atributo de um objeto (no contexto JS) é privado
  get idade(){
    return this._idade
  },
  set idade(valor){
    this._idade = valor
  }
}

pessoa.idade = 27
console.log(pessoa.idade)

pessoa.idade = 10
console.log(pessoa.idade)