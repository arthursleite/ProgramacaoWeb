const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const PORT = 8080;

// app.listen(PORT, function () {
//     console.log("app rodando na porta " + PORT)
// });

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", function (req, res) {
    let usuario = {
        nome: "Jota",
        telefone: 123
    };
    res.render("index.html", (usuario));
});

// app.get("/ucb", function (req, res) {
//     res.render("ucb.html");
// });

// app.get("/hello", function (req, res) {
//     res.send("Hello world!");
// });
