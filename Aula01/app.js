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
    res.json({ resultado: string });

});

app.use('/cpf/:cpf', (req, res) => { 
    let cpf = req.params.cpf;
    let soma = 0;
    let resto;
    soma = 0;
    //cpf com valores iguais 
  if (cpf == "00000000000") res.json({valido: false});

  for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;
   
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(9, 10)) ) res.json({valido: false});
   
    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
   
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ) res.json({valido: false});
    res.json({valido: true});
     
});
module.exports = app