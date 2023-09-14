//Desafio 02 - Multiplicação de Matrizes

const matrizA = [ // Primeira matriz
    [1, 3],
    [2, 5]
];
const matrizB = [ // Segunda matriz
    [8, 4],
    [0, 1]
];
const matrizC = Array(matrizA.length)

// Solução corrigida
// Numero de colunas primeira matriz
const colunasA = matrizA[0].length
// Numero de linhas segunda matriz
const linhasB = matrizB.length

if (colunasA == linhasB) {
    // inicializar dentro do array principal, em cada linha, um novo array
    for (let i = 0; i < colunasA; i++) {
        matrizC[i] = []
    }

    // criando a variavel que recebera os textos de cada linha
    let textoLinhas = ' '

    //vamos iterar em cada linha da primeira matriz
    for (let i = 0; i < matrizA.length; i++) {

        // agora em cada coluna
        for (let j = 0; j < colunasA; j++) {
            // nao esta funcionando corretamente
            textoLinhas += `${matrizA[i][j]} * ${matrizB[j][i]}${j < (colunasA - 1) ? ' + ' : ''}`
            //c[i][j] = a[i][j] * b[i][j]
        }

        //atribuindo para cada linha com o texto preenchido
        matrizC[i] = textoLinhas

        //limpando a String para os proximos valores que serao preenchidos
        textoLinhas = ' '
    }

    console.log("A x B = C")
    console.log(matrizC)
} else {
    console.log("As matrizes não podem ser multiplicadas")
}

/* //Minha solução
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
                matrizC[i][j] += matrizA[i][k] * matrizB[k][j]
            }
        }
    }

    console.log("Matriz C:");
    for (let i = 0; i < matrizC.length; i++) {
        console.log(matrizC[i]);
    }
    // professor, nao entendi como printar o "resultado" sem fazer a conta
} */
