"use strict";
/*Desafio: Criar um objeto funcionário com:
  -Array de strings com os nomes dos supervisores
  -Função de bater ponto que recebe hora (número) e retorna uma string 'Ponto normal (<= 8) ' e 'Fora do horário > (> 8)'*/
//Correção
let funcionario = {
    supervisores: ["João", "Alan", "Pedro", "Maria"],
    baterPonto(horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(12));
let funcionario2 = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario) {
        return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(5));
//# sourceMappingURL=desafioTipos.js.map