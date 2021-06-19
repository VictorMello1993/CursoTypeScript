// import {areaRetangulo} from './retangulo'

//Só pode deixar de usar o operador de desestruturação quando aplicado 'export default' no módulo 'retangulo.ts'
import areaRetangulo from './retangulo' 

// import {areaCircunferencia} from './circunferencia'
import {areaCircunferencia as circ} from './circunferencia' //usando alias para importação de um módulo 

console.log('Módulo carregado...')
console.log(areaRetangulo(7, 8))

// console.log(areaCircunferencia(2))
console.log(circ(2))



//Utilizando o sistema de módulos commonjs para importar um módulo
const {sayHello} = require('./novoModulo')
console.log(sayHello('Victor'))

/*OBS: para utilizar o commonjs dentro do Typescript, é preciso instalar um pacote contendo as tipagens do node para
o Typescript escrevendo o commando npm i -s @types/node e setar a propriedade "module": "commonjs" no arquivo
tsconfig.json*/