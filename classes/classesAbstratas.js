"use strict";
//Classes abstratas
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    //Método concreto, que pode ter implementação mesmo dentro de uma classe abstrata
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...nums) {
        this.resultado = nums.reduce((total, valorAtual) => total + valorAtual);
    }
}
class Multiplicacao extends Calculo {
    executar(...nums) {
        this.resultado = nums.reduce((total, valorAtual) => total * valorAtual);
    }
}
let c1 = new Soma();
c1.executar(4, 5, 9);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(4, 5, 9);
console.log(c1.getResultado());
/* Uma classe abstrata pode ter nenhum ou vários métodos abstratos, assim como pode possuir métodos concretos. A diferença é que na classe abstrata,
não é permitido instanciá-la diretamente. Os métodos abstratos não podem ter corpo, somente a assinatura. Para que seja possível o acesso à
implementação destes métodos, é preciso declarar variáveis de instância por meio de herança, onde cada classe filha possui um comportamento diferente,
embora todo objeto deve possuir tais métodos*/
//# sourceMappingURL=classesAbstratas.js.map