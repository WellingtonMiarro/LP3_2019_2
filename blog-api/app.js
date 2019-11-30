const express = require('express');
//Middlewares
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasBlog = require('./routes/blog');
require('./databases/db'); 

const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/artigos',rotasBlog);

module.exports = app;