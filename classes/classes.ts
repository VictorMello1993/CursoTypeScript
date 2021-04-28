//Criando uma classe em TypeScript
class Data {
  //Por padrão, os atributos são públicos
  dia: Number;
  mes: Number;
  ano: Number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  //OBS1: no TS não existe sobrecarga de métodos ou de construtor
  //OBS2: no TS é obrigatório criar um construtor para inicializar objetos
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
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

//Instanciando classe DataEsperta
const aniversarioEs1 = new DataEsperta(15, 12, 1993);
const aniversarioEs2 = new DataEsperta();

aniversarioEs1.dia = 10;
aniversarioEs2.mes = 5;

console.log(aniversario1, aniversario2);
