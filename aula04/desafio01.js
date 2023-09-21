function getNumbers() {
    let input
    let numbers

    input = prompt("Digite 5 números separados por vírgula: ")
    numbers = input.split(",").map(Number)

    if (numbers.length !== 5 || numbers.some(isNaN)) {
        // numbers.forEach(element => {
        //     if (isNaN(element)) {
        //         temp = element
        //         console.log(`${temp} não é um número válido`)
        //     }
        // })
        console.log("Valore inválidos, digite novamente")
        getNumbers()
    } else {   
        console.log(numbers)
    }
}

const prompt = require("prompt-sync")()
getNumbers()
