const calculadora = {
    somar: function (n1, n2) {
        return n1 + n2
    },
    subtrair: function (n1, n2) {
        return n1 - n2
    },
    multiplicar: function (n1, n2) {
        return n1 * n2
    },
    dividir: function (n1, n2) {
        return n1 / n2
    },
    fatorial: function (n) {
        if (n === 0) {
            return 1
        } else {
            return n * fatorial(n - 1)
        }
    }
}

const n1 = 5
const n2 = 12

console.log(`Soma: ${calculadora.somar(n1, n2)}`)
console.log(`Subtrair: ${calculadora.subtrair(n1, n2)}`)
console.log(`Multiplicar: ${calculadora.multiplicar(n1, n2)}`)
console.log(`Dividir: ${calculadora.dividir(n1, n2)}`)
console.log(`Fatorial: ${calculadora.fatorial(n1)}`)