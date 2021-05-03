"use strict";
//Desafio Produto
//Atributos: nome, preco, desconto
//Criar construtor
//Obs1: Desconto é opcional (valor padrão 0)
//Obs2: Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //Método da classe Produto
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off) - Valor líquido: R$${Math.ceil(this.precoDesconto())}`;
    }
    precoDesconto() {
        return this.preco - this.preco * this.desconto;
    }
}
const produto1 = new Produto("NVIDIA GEFORCE RTX 3080 12GB", 10000);
const produto2 = new Produto("Mouse Razer Viper Mini", 250, 0.2);
produto1.desconto = 0.4;
console.log(produto1, produto2);
console.log(produto1.resumo());
console.log(produto2.resumo());
//Agora criar um método chamado precoComDesconto
//Quais são os parâmetros e o retorno?
//Alterar o método resumo para mostrar o preço com desconto
//# sourceMappingURL=desafiosClasses.js.map