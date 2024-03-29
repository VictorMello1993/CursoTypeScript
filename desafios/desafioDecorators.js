"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Desafio Decorator perfilAdmin
//Criar um decorator que intercepte a instanciação da classe MudancaAdministrativa caso usuário não seja administrador ou não estiver logado
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
// interface MudancaAdministrativa{
//   critico?(): void
//  }
// function createUserAdmin(constructor: Function){
//   constructor.prototype.critico = function(){
//     console.log('Algo crítico foi alterado!')
//   }
// }
// @createUserAdmin
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
//MINHA RESOLUÇÃO
// function perfilAdmin(_: Function){
//   if(!usuarioLogado || !usuarioLogado.admin){
//     throw new Error('Sem permissão para altera o sistema!')
//   }
// }
//CORREÇÃO
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão para alterar o sistema!');
            }
        }
    };
}
new MudancaAdministrativa().critico();
// const user = new MudancaAdministrativa()
// user.critico && user.critico()
//# sourceMappingURL=desafioDecorators.js.map