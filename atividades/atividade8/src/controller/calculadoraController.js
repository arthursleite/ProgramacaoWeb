const calculadora = require("../calculadora/calculadora");

function indexCalculadora(req, res) {
    res.render("index.html");
}

function calcular(req, res) {
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    res.render("resultado.html");
    // res.send(`${n1} + ${n2} = ${calculadora.somar(n1, n2)}`); 
    //no exercicio, retornar o valor renderizando o html
}

module.exports = {
    indexCalculadora,
    calcular
}