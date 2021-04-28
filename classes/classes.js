"use strict";
//Criando uma classe em TypeScript
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
//Instanciando classe Data
var aniversario1 = new Data(15, 12, 1993);
var aniversario2 = new Data();
aniversario1.dia = 7;
aniversario2.mes = 6;
console.log(aniversario1, aniversario2);
//--------------------------------------------------------------------------------------------------------------------------------------------
//Forma mais reduzida de criar classes:
/*Sem declarar as propriedades de uma classe, e definindo modificadores de acesso
diretamente nos parâmetros do construtor*/
var DataEsperta = /** @class */ (function () {
    function DataEsperta(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataEsperta;
}());
//Instanciando classe DataEsperta
var aniversarioEs1 = new DataEsperta(15, 12, 1993);
var aniversarioEs2 = new DataEsperta();
aniversarioEs1.dia = 10;
aniversarioEs2.mes = 5;
console.log(aniversario1, aniversario2);
//# sourceMappingURL=classes.js.map