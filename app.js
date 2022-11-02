var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-) (Funcionando) ok ok');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado2 = subtracao(body.a, body.b);
  
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado2}`);
});

app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado3 = multiplicacao(body.a, body.b);
  
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado3}`);
});

app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado4 = divisao(body.a, body.b);
  
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado4}`);
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}
