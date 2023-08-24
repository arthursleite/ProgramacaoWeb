// ARRAY
let arrSimples = ['tese', 1, 1.1] // lembrando da tipagem fraca
console.log(arrSimples)
console.log(arrSimples[2])

// CONSTRUTOR
let outroArray = Array(1, 2, 3, 1)
console.log(outroArray)

let novoArray = Array(5)
console.log(novoArray.length)

let novoArray2 = Array('5')
console.log(novoArray2.length)
console.log(novoArray2[0])

let a = Array()
console.log(a.length)

let cores = ['branco', 'preto', 'preto-fosco', 'azul', 'amarelo', 'verde', 'vermelho']
console.log(cores)

// METODOS

console.log(outroArray.lastIndexOf(1))
console.log(outroArray.find((valor) => valor > 1)) // encontra e retorna o primeiro valor

console.log(novoArray[2])
console.log(novoArray.fill(10, 0)) // preenche com o valor informado de uma posição

console.log(cores.filter((cor) => cor.startsWith('preto'))) // encontra e retorna
// (cor) => cor.startsWith('preto') é uma arrow function.

// function (cor) {
//    cor.startsWith('preto')
// }
// a arrow function remove o 'function' e as chaves de uma funcao convencional

cores.push('laranja') // adiciona 'laranja' na ultima posicao
cores.splice(1, 0, 'lilás') // a partir da posicao 1, remove 0 elementos e adiciona 'lilas'
console.table(cores)

cores.pop()
cores.splice(1, 2) // a partir da posicao 1, remove 2 elementos
console.table(cores)