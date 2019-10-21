const express = require('express');

const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasContatos= require('./routes/Contatos');

const app = express();

app.use(logger('dev')); // moded desenvolvimento DEV


app.use(cors()); // para liberar o acesso 


app.use(bodyParser.json()); // recebe o post 


app.use('/contatos',rotasContatos);

module.exports = app;