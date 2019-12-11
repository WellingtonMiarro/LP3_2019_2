const Lista = require('../models/Lista');

const Item = require('../models/Item');

const controller = {

   recuperaListas: async(req, res) => {
      const listas = await Lista.find();
      return res.json(listas);

   },
   recuperaPorDescricao: async(req, res) => {
      const { consulta } = req.body;
      let itens = await Item.find({
         descricao: {'$regex':consulta, '$options':'i'}},'descricao');
      return res.json(itens);

   },

   recuperarItens: async (req, res)=>{//assincrona  //operacoes de leitura  nao perde os dados
      const { consulta } = req.body;
      const itens = await Item.find({
         //regex parte da descricao
         //options insensitive
         descricao: {'$regex':consulta, '$options':'i'}
         
      });
      return res.json(itens);
   },

    salvar: (req, res) => {//sincrona //operacoes de escrita  perde os dados
       const { nome } = req.body;

       if(nome){ //validação 
          const lista = req.body;
          Lista
          .create(lista)
          .then(listaSalva => res.status(201).json(listaSalva))
          .catch(erro =>{
             console.log(erro);
             res.status(500).json({mensagem:'Erro ao tentar salvar Lista'})
          });

       }else{
         return res.status(400).json({ mensagem:'Nome não Informado' });
       }
    },


    atualizar: (req, res) =>{
         const { id } = req.params;
         const lista = req.body;


         Lista
         .findByIdAndUpdate(id, lista) /// recupera p id e atualiza
         .exec()
         .then(listaAtualizada => {

            //se encontrou a lista e a atualizou .....
            if(listaAtualizada){
               res.json({mensagem: "Lista Atualizada"})
            }else{
               res.status(404).json({ mensagem: "Lista não encontrada"})
            }
         }) // 1 casos: eu encontrei e atualizei 2 caso: eu consegui acessa mas nao encontrei o ID
         .catch(erro =>{
            console.log(erro);
            res.status(500).json({mensagem: 'Erro ao tentar atualizar a lista'})
         }); 
    },
    remover: (req, res) => {
       const { id } = req.params;

       Lista
       .findByIdAndRemove( id )
       .exec()
       .then( 
         () => res.status(204).end(),
         erro => {
            console.log(erro)
         }
         )
       .catch(erro => {
          console.log(erro);
          res.status(500).json({mensagem: 'Erro ao tentar remover a lista'})
       });

    }

};

module.exports = controller;