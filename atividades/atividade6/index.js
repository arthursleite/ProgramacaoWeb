const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const port = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", {});
});

app.post("/dados", function (req, res) {
  const dados = {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    dataAgendamento: req.body.dataAgendamento
  };

  let erro_form = false;
  if (dados.nome == "") {
    erro_form = true;
  }
  if (dados.endereco == "") {
    erro_form = true;
  }
  if (dados.telefone == "") {
    erro_form = true;
  }
  if (dados.dataAgendamento == "") {
    erro_form = true;
  }

  // console.log(dados);
  res.render("dados", {dados, erro_form});
});


app.listen(port, () => {
  console.log(`Programa rodando na porta ${port}`)
})