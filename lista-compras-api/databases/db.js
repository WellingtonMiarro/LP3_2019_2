const mongoose = require('mongoose');

//const dbURI = 'mongodb://localhost/lista-compras-dev'; //basicamente so mudar o nome do banco 

const dbURI = 'mongodb+srv://listacompras:wellington1234@lista-compras-dev-lgdi2.mongodb.net/lista-compra-prod?retryWrites=true&w=majority';
mongoose
    .connect(dbURI, {useNewUrlParser:true})
    .then(() => console.log('Mongoose Conectado!!!'))
    .catch(erro => console.log(erro));