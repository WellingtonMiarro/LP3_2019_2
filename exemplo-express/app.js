const express = require('express');

//constante que controla nosso app
const app = express();

app.use('/', (req,res) => res.send("Fala galerinha do youtube!")
);

app.listen(3000,()=> console.log("Servidor Iniciado . . ."))