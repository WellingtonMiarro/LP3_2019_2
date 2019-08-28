const express = require('express');
//Middlewares
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasListas = require('./routes/listas');

const app = express();

app.use(logger('dev'));

/** A utilizar a função CORS() sem nenhum argumento, voce estara dando liberando o acesso a todos os servicos para qualquer outra
    aplicacao que tenha acesso a internet.*/
app.use(cors());

//Permite que nosso app Express consiga interpretar dados do frontend em formato JSON
app.use(bodyParser.json());

//Registra as rotas relacionadas a Listas 
app.use('/listas',rotasListas);

module.exports = app;