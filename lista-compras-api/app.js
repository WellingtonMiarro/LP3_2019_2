const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParses = require('body-parses');

const app = express();

app.use(logger('dev'));

/** A utilizar a função CORS() sem nenhum argumento, 
    voce estara dando liberando o acesso a todos os servicos para qualquer outra
    aplicacao que tenha acesso a internet.*/
app.use(cors());

/*
Permite que nosso app Express consiga interpretar dados do frontend em formato JSON
*/
app.use(bodyParses.json());

module.exports = app;