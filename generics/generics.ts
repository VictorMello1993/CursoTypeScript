function echo(object: any) {
  return object;
}

console.log(echo("Victor").length);
console.log(echo(27));
console.log(echo(27).length); //Retornará undefined pois além do tipo number não possuir length, o compilador do Typescript não detectou erros de compilação pois o parâmetro e o tipo de retorno é do tipo any
console.log(echo({ name: "Victor", age: 27 }));

//Usando generics
function echoV2<T>(object: T): T {
  return object;
}

console.log(echoV2("Victor").length); //O tipo T agora assume que o valor passado é do tipo string
console.log(echoV2(27)); //O tipo T agora assume que o valor passado é do tipo number
// console.log(echoV2(27).length) //Agora o compilador volta a criticar, pois foi definido que o tipo T do generics passa a ser do tipo number, e o mesmo não possuir propriedade length
console.log(echoV2({ name: "Victor", age: 27 })); //O tipo T agora que o valor passado é do tipo Object

console.log(
  echoV2<number>(27)
); /*No momento que a função echoV2 é executado, o tipo genérico é inferido, ou seja,
                                  se for especificado o tipo T na chamada da função, tudo que estiver definido como
                                  tipo T, seja o tipo do parâmetro ou o tipo de retorno, será substituído pelo 
                                  tipo especificado.*/

//Generics envolvendo arrays
//Generics disponíveis no Typescript
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5') //ERRO! Foi especificado como sendo array de number!
console.log(avaliacoes);

function print<T>(args: T[]) {
  args.forEach((e) => console.log(e));
}

print([1, 2, 3]);
print<number>([1, 2, 3]);
print<string>(["Victor", "Pedro", "Ana"]);

print<{ name: string; age: number }>([
  { name: "Fulano", age: 22 },
  { name: "Ciclano", age: 23 },
  { name: "Beltrano", age: 24 },
]);
//Ou
type Student = { name: string; age: number };
print<Student>([
  { name: "Fulano", age: 22 },
  { name: "Ciclano", age: 23 },
  { name: "Beltrano", age: 24 },
]);

//Generics com tipo função
// const callEcho: <T>(data:T) => T = echoV2 /*Uma variável será uma função do tipo T, cujo parâmetro é do tipo, e que retorna tipo T*/
// console.log(callEcho<string>('Alguma coisa'))
//Ou
type Echo = <T>(data: T) => T;
const callEcho: Echo = echoV2;
console.log(callEcho<string>("Alguma coisa"));

//Generics com classes
abstract class BinaryOperator<T, R> {
  constructor(public op1: T, public op2: T) {}

  abstract execute(): R;
}

//Na classe acima, percebe-se que é permitido estabelecer mais de um tipo nos generics

//Instanciando classes sem utilizar generics
// console.log(new BinaryOperator('Bom', 'Dia').execute())
// console.log(new BinaryOperator(3, 7).execute())

// /*Comportamento estranho. Concatenação de objetos (what???).
// Ao invés de validar o tipo de parâmetro, simplesmente transforma tudo isso em representação de string e concatena junto.
// Resultado: '[Object][Object]'*/
// console.log(new BinaryOperator({}, {}).execute())

class Sum extends BinaryOperator<number, number> {
  execute(): number {
    return this.op1 + this.op2;
  }
}

console.log(new Sum(3, 4).execute());

//Desafio: criar uma classe que herde de BinaryOperator que calcula a diferença entre as datas
class DiffDates extends BinaryOperator<Data, string> {
  execute(): string {
    const time1 = this.getTime(this.op1);
    const time2 = this.getTime(this.op2);
    const diff = Math.abs(time1 - time2);
    const day = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diff / day)} dia(s)`;
  }

  getTime(date: Data): number {
    let { dia, mes, ano } = date;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }
}

const d1 = new Data(1, 4, 2022);
const d2 = new Data(1, 1, 2021);

console.log(new DiffDates(d1, d2).execute());

//Desafio: criar uma classe Fila que possui atributo fila do tipo array e método entrar, próximo e imprimir

class Queue<T> {
  private people: T[];
  constructor(...args: T[]) {
    this.people = args;
  }

  public enter(person: T): void {
    this.people.push(person);
  }

  public next(): void {
    this.people.splice(0, 1);
  }

  public print(): void {
    console.log(this.people);
  }
}

const q1 = new Queue("João", "Maria", "Pedro", "Victor");
q1.print();
q1.enter("Vanderson");
q1.print();
q1.next();
q1.next();
q1.next();
q1.next();
q1.print();
q1.next();
q1.print();

//Desafio 2: Criar uma classe chamada Map, que irá receber um array de objetos com atributo chave (number) e valor (string)
//           Essa classe terá três métodos: clear, print e add({k , v})

// ---------------------------------MINHA RESOLUÇÃO ----------------------------------------------------------
// class Mapa<X, Y> {
//   private itens: { key: X; value: Y }[];

//   constructor(...args: { key: X; value: Y }[]) {
//     this.itens = args;
//   }

//   public clear() {
//     this.itens.splice(0);
//   }

//   public print() {
//     console.log(this.itens);
//   }

//   public add(item: { key: X; value: Y }) {
//     const map = this.get(item.key);
//     if (map) {
//       const index = this.itens.indexOf(map);
//       this.itens[index].value = item.value;
//     } else {
//       this.itens.push(item);
//     }
//   }

//   public get(key: X): {key: X; value: Y} | null{
//     const map = this.itens.find(i => i.key === key)
//     return map ?? null;
//   }
// }

// -------------------------------------------------------------------------------------------

// ---------------------------------CORREÇÃO ----------------------------------------------------------

type Pair<X, Y> = {key: X, value: Y}

class Mapa<X, Y>{
  itens: Array<Pair<X,Y>> = new Array<Pair<X, Y>>()

  get(key: X): Pair<X, Y> | null {
    const result = this.itens.filter(i => i.key === key)
    return result ? result[0] : null
  }

  add(pair: Pair<X, Y>){
    const found = this.get(pair.key)
    if(found){
      found.value = pair.value
    }
    else{
      this.itens.push(pair)
    }
  }

  clear(){
    this.itens = new Array<Pair<X, Y>>()
  }

  print(){
    console.log(this.itens)
  }
}
// -------------------------------------------------------------------------------------------

// const m1 = new Mapa(
//   { key: 1, value: "Pedro" },
//   { key: 2, value: "Victor" },
//   { key: 3, value: "Vanderson" }
// );

const m1 = new Mapa<number, string>()
m1.add({ key: 5, value: "Maria" })
m1.add({ key: 3, value: "João" })
m1.add({ key: 1, value: "Ronaldinho" })
m1.add({ key: 1000, value: "Betina" })
m1.add({ key: 3, value: "Bravo" })
m1.print()
console.log(m1.get(3))
m1.clear()
m1.print()

