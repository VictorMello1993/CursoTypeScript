"use strict";
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// console.log(m1.areaCirc(4))
//Acessando o método estático, que pertence à própria classe e não a uma instância daquela classe
console.log(Matematica.areaCirc(4));
/*Para declarar um atributo e método estáticos, utiliza-se a palavra reservada `static`.
Isso indica que os atributos e métodos são acessíveis diretamente no nível da classe, e não no nível
da instância de uma classe*/ 
//# sourceMappingURL=atributosMetodosEstaticos.js.map