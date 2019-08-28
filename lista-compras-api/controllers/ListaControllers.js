const Lista = require ('../models/Lista');
let listas = [];
const controller = {
    // Arrow Function
    recuperarTodas: (req, res) =>  res.json(listas),
    salvar: (req, res) => {
       const nome = req.body.nome;

       //Verifica se foi informado o nome da lista

       //SEMPRE RESPONDER COM RESPOSTA ADEQUADA
       if(nome){
          let lista = new Lista(nome);
          listas.push(lista);
          res.status(201).json(lista);
       }
       else{
        res.status(400).json({mensagemErro:'Nome da Lista não Informado!!!'});
       }
    }
};

module.exports = controller;