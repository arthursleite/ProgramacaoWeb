const matrizA = [
    [1, 3],
    [2, 5]
];

const matrizB = [
    [2, 2],
    [0, 1]
];

// matrizA.length == numero de linhas
// matrizA[i].length == numero de colunas

const linhasA = matrizA.length;
const colunasA = matrizA[0].length;
const linhasB = matrizB.length;
const colunasB = matrizB[0].length;

if (colunasA !== linhasB) {
    console.log("Não é possível calcular");
} else {
    let matrizC = [];

    for (let i = 0; i < linhasA; i++) { // || colunasB != linhasA
        matrizC[i] = [];
        for (let j = 0; j < colunasB; j++) {
            matrizC[i][j] = 0;
            for (let k = 0; k < colunasA; k++) {
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    console.log("Matriz C:");
    for (let i = 0; i < matrizC.length; i++) {
        console.log(matrizC[i]);
    }
    // professor, nao entendi como printar o "resultado" sem fazer a conta
}
