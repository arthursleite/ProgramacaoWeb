const semestre = 0;
let numeroSemestre = "";

switch (semestre) {
    case 0:
        numeroSemestre = "1º semestre";
        break;
    case 1:
        numeroSemestre = "2º semestre";
        break;
    default:
        numeroSemestre = "Semestre inexistente";
        break;
}
console.log(numeroSemestre);