const express = require('express');
const app = express();

// Nossos Web Services

app.use('/data', (req, res) => {

    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);


 });


app.use('/inverte/:string', (req, res) => { 
    // recupera a variavel de parametro
    let string = req.params.string;

    //Inverte a String
    string = string.split('').reverse().join('');
    res.json(string);

});

app.use('/cpf/:cpf', (req, res) => { 

    let cpf = req.params.cpf;

    //fazer a validacao de cpf 
    res.send('Validador de CPF');
});


app.listen(3000,
    ()=> console.log('Servidor Iniciado . . .')
);