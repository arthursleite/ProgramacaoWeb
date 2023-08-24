let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log("Matriz A:")
console.table(matrizA);

let matrizT = [];

for (let i = 0; i < matrizA[0].length; i++) {
    matrizT[i] = [];
    for (let j = 0; j < matrizA.length; j++) {
        matrizT[i][j] = matrizA[j][i];
    }
}
console.log("Matriz T:")
console.table(matrizT);