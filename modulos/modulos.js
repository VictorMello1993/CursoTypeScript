"use strict";
// import {areaRetangulo} from './retangulo'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Só pode deixar de usar o operador de desestruturação quando aplicado 'export default' no módulo 'retangulo.ts'
const retangulo_1 = __importDefault(require("./retangulo"));
// import {areaCircunferencia} from './circunferencia'
const circunferencia_1 = require("./circunferencia"); //usando alias para importação de um módulo 
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8));
// console.log(areaCircunferencia(2))
console.log(circunferencia_1.areaCircunferencia(2));
//Utilizando o sistema de módulos commonjs para importar um módulo
const { sayHello } = require('./novoModulo');
console.log(sayHello('Victor'));
/*OBS: para utilizar o commonjs dentro do Typescript, é preciso instalar um pacote contendo as tipagens do node para
o Typescript escrevendo o commando npm i -s @types/node e setar a propriedade "module": "commonjs" no arquivo
tsconfig.json*/ 
//# sourceMappingURL=modulos.js.map