function printNumber(n) {
    let counter = 0
    if (typeof n == "number" && counter < 5) {
        console.log(n, "é um número válido")
        n = prompt("Digite um número com vírgula: ")
        printNumber(n)
    } else if (typeof n != "number") {
        console.log(n, "não é um número com vírgula")
        n = prompt("Digite um número com vírgula: ")
        printNumber(n)
    }
}

const prompt = require("prompt-sync")()
let n = prompt("Digite um número com vírgula: ")
printNumber(n)
