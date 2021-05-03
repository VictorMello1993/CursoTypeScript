"use strict";
//Criando uma classe em TypeScript
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
//Instanciando classe Data
const aniversario1 = new Data(15, 12, 1993);
const aniversario2 = new Data();
aniversario1.dia = 7;
aniversario2.mes = 6;
console.log(aniversario1, aniversario2);
//--------------------------------------------------------------------------------------------------------------------------------------------
//Forma mais reduzida de criar classes:
/*Sem declarar as propriedades de uma classe, e definindo modificadores de acesso
diretamente nos parâmetros do construtor*/
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
//Instanciando classe DataEsperta
const aniversarioEs1 = new DataEsperta(15, 12, 1993);
const aniversarioEs2 = new DataEsperta();
aniversarioEs1.dia = 10;
aniversarioEs2.mes = 5;
console.log(aniversario1, aniversario2);
//# sourceMappingURL=classes.js.map