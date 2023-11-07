const calculadora = require("../calculadora/calculadora");

function indexCalculadora(req, res) {
    res.render("index.html");
}

function calcular(req, res) {
    const numeros = {
        n1: req.body.n1,
        n2: req.body.n2
    };
    console.log(numeros);
    res.render("resultado.html", {numeros});
    // res.send(`${n1} + ${n2} = ${calculadora.somar(n1, n2)}`); 
    //no exercicio, retornar o valor renderizando o html
}

module.exports = {
    indexCalculadora,
    calcular
}