const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/lista-compras-dev'; //basicamente so mudar o nome do banco 

mongoose
    .connect(dbURI, {useNewUrlParser:true})
    .then(() => console.log('Mongoose Conectado!!!'))
    .catch(erro => console.log(erro));