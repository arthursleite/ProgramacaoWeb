const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const port = 8080;

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})