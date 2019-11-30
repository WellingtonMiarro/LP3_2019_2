const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/blog-dev'; 

mongoose
    .connect(dbURI, {useNewUrlParser:true})
    .then(() => console.log('Mongoose Conectado!!!'))
    .catch(erro => console.log(erro));