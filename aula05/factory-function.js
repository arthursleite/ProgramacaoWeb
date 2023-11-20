// // AQUI NÓS UTILIZAMOS O PADRÃO CAMEL CASE

// // FORMA QUE FUNCIONA PORÉM NÃO É

// // Forma mais verbosa
// function criarPessoa(nomePessoa, idade) {
//     const pessoa = {
//         nome: nomePessoa,
//         idade: idade,
//         printaAtributos: function () {
//             return `${this.nome} ${this.idade}`
//         },
//         calculaAnoNascimento: function () {
//             return new Date().getFullYear() - this.idade
//         }
//     }
//     return pessoa
// }

// let marido2 = criarPessoa("Mauricio", 90)
// console.log(marido2.printaAtributos())
// console.log(marido2.calculaAnoNascimento())

// let esposa2 = criarPessoa("Bruna", 87)
// console.log(esposa2.printaAtributos())
// console.log(esposa2.calculaAnoNascimento())


// ESTRUTURA OTIMIZADA

function criarPessoa(nome, idade) {
    return {
        nome,
        idade,
        printaAtributos() {
            return `${nome} ${idade}`
        },
        calculaAnoNascimento() {
            return new Date().getFullYear() - this.idade
        }
    }
}

let marido2 = criarPessoa("Mauricio", 90)
console.log(marido2.printaAtributos())
console.log(marido2.calculaAnoNascimento())

let esposa2 = criarPessoa("Bruna", 87)
console.log(esposa2.printaAtributos())
console.log(esposa2.calculaAnoNascimento())

// AQUI NÓS UTILIZAMOS O PADRÃO PASCAL CASE

// Forma mais simples, que transforma essa função construtora em uma classe e consequ
function Pessoa(paramNome, paramIdade) {
    this.nome = paramNome
    this.idade = paramIdade
    this.calculaAnoNascimento = function () {
        return new Date.getFullYear() - this.idade
    }
    this.printaAtributos = function () {
        return `${this.nome} ${this.idade}`
    }
}
let faustao = new Pessoa("Faustao", 76)
console.log(faustao.printaAtributos())
console.log(faustao.calculaAnoNascimento())

let gugu = new Pessoa("Gugu", 71)
console.log(faustao.printaAtributos())
console.log(faustao.calculaAnoNascimento())

// Forma mais moderna, que surgiu no JavaScript 2015
class Carro {
    constructor(pNome, pAno) {
        this.nome = pNome
        this.ano = pAno
    }

    calculaAnoNascimento() {
        return new Date.getFullYear() - this.ano
    }
}

let carro1 = new Carro("Marea", 2000)
let carro2 = new Carro("Fusca", 1989)
console.log(carro1.calculaAnoNascimento())
console.log(carro2.calculaAnoNascimento())