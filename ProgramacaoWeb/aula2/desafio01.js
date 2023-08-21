let matrizA = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.table(matrizA);
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrizA[i][j] = matrizA[j][i];
        console.log(matrizA);
    }
}
console.table(matrizA);