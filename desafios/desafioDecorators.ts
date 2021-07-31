// Desafio Decorator perfilAdmin
//Criar um decorator que intercepte a instanciação da classe MudancaAdministrativa caso usuário não seja administrador ou não estiver logado
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

// interface MudancaAdministrativa{
//   critico?(): void
//  }

// function createUserAdmin(constructor: Function){
//   constructor.prototype.critico = function(){
//     console.log('Algo crítico foi alterado!')
//   }
// }

// @createUserAdmin
@perfilAdmin
class MudancaAdministrativa{
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
//MINHA RESOLUÇÃO
// function perfilAdmin(_: Function){
//   if(!usuarioLogado || !usuarioLogado.admin){
//     throw new Error('Sem permissão para altera o sistema!')
//   }
// }


//CORREÇÃO
function perfilAdmin<T extends Constructor>(constructor: T){
  return class extends constructor{
    constructor(...args: any[]){
      super(...args)
      if(!usuarioLogado || !usuarioLogado.admin){
        throw new Error('Sem permissão para alterar o sistema!')
      }
    }
  }
}

new MudancaAdministrativa().critico()

// const user = new MudancaAdministrativa()
// user.critico && user.critico()
