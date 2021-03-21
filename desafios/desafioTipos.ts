/*Desafio: Criar um objeto funcionário com:
  -Array de strings com os nomes dos supervisores
  -Função de bater ponto que recebe hora (número) e retorna uma string 'Ponto normal (<= 8) ' e 'Fora do horário > (> 8)'*/

//Correção
let funcionario: {
    supervisores: string[];
    baterPonto: (horas: number) => string;
  } = {
    supervisores: ["João", "Alan", "Pedro", "Maria"],
    baterPonto(horario: number): string {
      return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
  };
  
  console.log(funcionario.supervisores);
  console.log(funcionario.baterPonto(12));
  
  //Criando tipos personalizados (Alias): Isso evita duplicidade de definição de objetos na hora de criar novas variáveis desse tipo
  type Funcionario = {
    supervisores: string[];
    baterPonto: (horas: number) => string;
  };
  
  let funcionario2: Funcionario = {
    supervisores: ["Bia", "Carlos"],
    baterPonto(horario: number): string {
      return horario <= 8 ? "Ponto normal" : "Fora do horário";
    },
  };
  console.log(funcionario2.supervisores);
  console.log(funcionario2.baterPonto(5));