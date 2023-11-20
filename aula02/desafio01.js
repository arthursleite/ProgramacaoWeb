// Desafio 01 - Matriz Transposta

let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
]
let matrizT = new Array(matrizA[0].length)
// let matrizT = [];

console.log("Matriz A:")
console.table(matrizA);

//Solução corrigida
for (let i = 0; i < matrizT.length; i++) {
    matrizT[i] = new Array(matrizA.length)
    for (let j = 0; j <matrizA.length; j++) {
        matrizT[i][j] = matrizA[j][i]
    }
}

//Minha solução (funcional)
/*for (let i = 0; i < matrizA[0].length; i++) {
    matrizT[i] = [];
    for (let j = 0; j < matrizA.length; j++) {
        matrizT[i][j] = matrizA[j][i];
    }
}*/

console.log("Matriz T:")
console.table(matrizT);