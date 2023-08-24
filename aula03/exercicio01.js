function saudacao() {
    return "Hello world!"
}

console.log(saudacao())

function saudacaoNome(nome) {
    return `Hello ${nome}`
}

let nome = "percy"
console.log(saudacaoNome(nome))