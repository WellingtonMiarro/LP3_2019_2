const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/trabalho', require('./routes/trabalho'));

const PORTA = process.env.PORT || 3001;

app.listen(PORTA, () => console.log(`App ouvindo na porta ${PORTA}`));