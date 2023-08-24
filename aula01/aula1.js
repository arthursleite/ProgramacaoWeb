console.log("--const--");
const contador = 1;
if (contador == 1) {
    const pi = 3.14;
    console.log("Pi: " + pi);
}

// console.log(pi);
//Resultado: "ReferenceError: pi is not defined"

console.log("\t");
console.log("--let--");
let nomeProfessor = "Antonio";
console.log("Nome do professor: " + nomeProfessor);
nomeProfessor = "Augusto";
console.log("Nome do professor: " + nomeProfessor);

console.log("\t");
console.log("--var--");
console.log("Nome da Universidade: " + nomeUniversidade);
var nomeUniversidade = "UCB";
console.log("Nome da Universidade: " + nomeUniversidade);

console.log("\t");
console.log("Tipos primitivos");
console.log("--String--");
let texto = String("Meu texto");
console.log(texto);
console.log("Posição 4 de texto: " + texto[4]);

console.log("\t");
console.log("--Number--");
let numero = 4;
console.log("Numero: " + numero);
numero = 4.56445;
console.log("Numero: " + numero);

console.log("\t");
console.log("--Boolean--");
let booleano = true;
console.log(booleano);
let booleanoSimples = false;
console.log(booleanoSimples);

console.log("\t");
console.log("--Null--");
let nulo = null;
console.log(nulo);

console.log("\t");
console.log("--Undefined--");
let indefinido = undefined;
console.log(indefinido);

console.log("\t");
console.log("--Operadores aritméticos--");
console.log(3 + 3);
console.log(3 * 3);
console.log(3 - 3);
console.log(3 / 3);