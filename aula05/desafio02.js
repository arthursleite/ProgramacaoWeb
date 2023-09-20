function Aluno() {
    
    let nota1 = parseFloat(prompt("Digite a nota 1 do aluno: "))
    let nota2 = parseFloat(prompt("Digite a nota 2 do aluno: "))
    let media = (nota1 + nota2) / 2
    if (media >= 7)  {
        console.log("APROVADO")
    } else {
        console.log("REPROVADO")
    }
    input = prompt("Deseja sair y/n?")
    if (input.toLowerCase() != "y") {
        Aluno()
    }
}

const prompt = require("prompt-sync")()
Aluno()