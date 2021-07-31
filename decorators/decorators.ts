type Constructor = {new (...args: any[]):{}}

//Decorator
function logClass(constructor: Function){
  console.log(constructor)
}

//Função factory: funções que retornam decorators. Isso permite o uso dos parâmetros para manipular decorators
//Exemplo: 

/*Essa função também retorna decorator, mas não possui implementações. 
Isso é para evitar erro de compilação do Typescript que não permite retornar o valor null
que é incompatível para a assinatura de uma função factory*/
function emptyDecorator(_: Function){}

//Função factory
function logClassIf(value: boolean){
  return value ? logClass : emptyDecorator
}

//Função factory
function decorator(obj: {a: string, b: number}){
  return function(_: Function): void { //Decorator
    console.log(obj.a + ' ' + obj.b)
  }
}

//Modificando construtor de uma classe com os decorators, por meio de herança de classes decoradas
function logObject(constructor: Constructor){
  console.log('Carregando...') //O decorator é sempre carregado apenas uma única vez
  return class extends constructor{
    constructor(...args: any[]){
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

interface classTestDecorator{
  print?(): void
}

// @logClass
// @decorator({a: 'Teste', b: 123})
// @logClassIf(true)
@logObject
@printable
class classTestDecorator{
  constructor(){
    console.log('novo...')
  }
}

//Adicionando novos métodos no protótipo de uma classe utilizando decorators
//Ex:
function printable(constructor: Function){
  constructor.prototype.print = function(){
    console.log(this)
  }
}

// new classTestDecorator()
// new classTestDecorator()
// new classTestDecorator()

// new classTestDecorator().print() //ERRO! O Typescript não consegue inferir o que está contido na classe classTestDecorator
// (<any>new classTestDecorator()).print() //Solução 1 para erro descrito na linha 66 (uso do typecast para ignorar a validação da classe - não recomendável)

//Solução 2 para erro descrito na linha 66 (uso da interface -> vide linha 40)
const obj1 = new classTestDecorator()
 obj1.print && obj1.print() 
 obj1.print && obj1.print() 

 //Solução 3: utilizar o tipo generic que seja do tipo Constructor

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE MÉTODO
//Ex:
class CheckingAccount{
  @nonNegativeValue
  private balance: number

  constructor(balance: number){
    this.balance = balance
  }

  @freeze
  withdraw(@paramInfo value: number){
    // if(value <= this.balance){
      this.balance -= value
    // }
  }

  @freeze
  getBalance(){
    return this.balance
  }
}

const cc = new CheckingAccount(5000.25)
cc.withdraw(2000)
// cc.withdraw(2000)
// cc.withdraw(2000)
// cc.withdraw(2000)
console.log(cc.getBalance())

//ERRO! Usuário mal intencionado consegue acessar o atributo privada! Solução: decorator de método que proteja contra o acesso indevido de atributos privados
// cc.getBalance = function(){
//   return this['saldo'] + 7000
// }

// console.log(cc.getBalance())

function freeze(target: any, methodName: string, descriptor: PropertyDescriptor){
  console.log(target)
  console.log(methodName)
  descriptor.writable = false //Essa configuração faz com que o usuário não consiga modificar a propriedade privada
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE ATRIBUTO
function nonNegativeValue(target: any, propertyName: string){
  delete target[propertyName]

  Object.defineProperty(target, propertyName, {

    get: function(): any {
      return target['_' + propertyName]
    },

    set: function(value: any): void {
      if(value < 0){
        throw new Error('Saldo inválido')
      }
      else{
        target['_' + propertyName] = value
      }
    }
  })
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//DECORATORS DE PARÂMETRO
function paramInfo(target: any, methodName: string, paramIndex: number){
  console.log(`Target: ${target}`)
  console.log(`Method: ${methodName}`)
  console.log(`Index: ${paramIndex}`)
}



