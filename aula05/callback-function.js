// ESTRUTURA BÁSICA
// Criar uma função que recebe uma outra função como parâmetro
// Dentro desta função principal, chamar a função recebida via retorno

function printar(callback) {
    callback()
}

printar(() => console.log("Oiê"))
//Resultado: Oiê

// Forma verbosa (function tradicional)
let texto = "O Erick vai ser"
function escrever() {
    console.log(texto += "papai")
}
printar(escrever)

// Forma enxuta (arrow function)
let hw = "Hello world!"
printar(() => { hw += "papai"})
console.log(hw)