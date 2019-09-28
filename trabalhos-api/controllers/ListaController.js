
//este import é exemplo de Associação por desestruturação
const {Op} = require('sequelize');
const { Trabalho, Item } = require('../databases/db');

const controller = {
    // Arrow Function
    recuperarTodas: async(req, res) =>  {
      //findAll recupera tudo 
      const trabalhos = await Trabalho.findAll();
      return res.json(trabalhos);
    },
    salvar: (req, res) => {
      const trabalho = req.body;

      if(!trabalho.nome){
         return res.status(400).json({mensagem: 'Trabalho não infromado'})
      }
      Trabalho
      .create(trabalho)
      .then(
         trabalhoSalva => res.status(201).json(trabalhoSalva), 
         erro => res.status(400).json(erro)

      )
      .catch(
         erro => {console.log(erro);
          res.status(500).json({mensagem: 'Erro ao tentar salvar a Trabalho'})
         }
      );
    },

    recuperarItensPorDescricao: async (req,res) => {
       //const consulta = req.body.consulta;
       const {consulta} = req.body;

       //por enquanto realizamos a consulta exata
      let itens = await Item.findAll({
         where:{
            area: {
               [Op.iLike]: `%${consulta}%`
            }
         }
      });
      return res.json(itens)
    }

};

module.exports = controller;