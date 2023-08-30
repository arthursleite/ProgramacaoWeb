function RetornarArray(frase) {
    console.log(frase)
    let palavras = frase.split(" ")
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] != "") {
            palavras[i] = `${i + 1}ª palavra distinta`
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