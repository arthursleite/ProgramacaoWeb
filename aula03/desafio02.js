// function RetornarArray(frase) {
//     console.log(frase)
//     let palavras = frase.split(" ")
//     for (let i = 0; i < palavras.length; i++) {
//         if (palavras[i] != "") {
//             palavras[i] = `${i + 1}ª palavra distinta`
//         }
//     }
//     return palavras
// }

function retornarArrayPalavras(valor) {
    return valor.split(" ")
}

const valor = "eu sou um aluno da catolica"
const palavras = retornarArrayPalavras(valor)
palavras.forEach(palavra => {
    console.log(`${palavra}`)
})