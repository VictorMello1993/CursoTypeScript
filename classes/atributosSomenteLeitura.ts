/*Atributos read-only (somente leitura): São atributos que são setados apenas uma única vez, 
e a partir disso o valor não pode ser mais alterado*/

class Aviao{
  public readonly modelo:string
  constructor(modelo: string, public readonly prefixo: string){
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC');

//ERRO no TS! Atributos não podem ser alterados porque já foram atribuídos anteriormente
// turboHelice.modelo = 'ABC'
// turboHelice.prefixo = 'CDE'
console.log(turboHelice)