function somar(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

function subtrair(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

function multiplicar(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function dividir(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

module.exports = {
    somar, subtrair, multiplicar, dividir
}