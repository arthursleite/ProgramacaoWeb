function RetornarArray(frase) {

    let temp = frase
    let palavras = temp.split(" ")
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] == 0) {
            palavras[i] = aleatorio
        }
    }
    return palavras
}

console.log(RetornarArray("sou um aluno da catolica"))



//nao testado




/*const meuArray = [1, "dois", 3]
console.log(meuArray) // (3) [1, "dois", 3]
meuArray[0] = "um"
console.log(meuArray) // (3) ["um", "dois", 3]
const meuArray = [
    1,
    "dois",
    3
]*/