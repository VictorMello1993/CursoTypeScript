"use strict";
//Criar o método precoComDesconto
//Quais parâmetros e o retorno?
//Alterar o método resumo para mostrar o preço com desconto
//Desafio Produto
//Atributos: nome, preco, desconto
//Criar construtor
//Obs1: Desconto é opcional (valor padrão 0)
//Obs2: Criar dois produtos: passando dois e três params
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //Método da classe Produto
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.preco + " (" + this.desconto * 100 + "% off)";
    };
    return Produto;
}());
var p1 = new Produto("NVIDIA GEFORCE RTX 3080 12GB", 10000);
var p2 = new Produto("Mouse Razer Viper Mini", 250, 0.2);
produto1.desconto = 0.4;
console.log(produto1, produto2);
console.log(produto1.resumo());
console.log(produto2.resumo());
//# sourceMappingURL=desafioClasseMetodo.js.map