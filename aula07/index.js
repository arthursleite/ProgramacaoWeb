const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("APP WEB Revisão")
});

app.get("/hello", function(req, res){
    let nome = req.params.n;
    res.send("Olá, mundo! Saudações do " + nome);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta " + PORT);
});