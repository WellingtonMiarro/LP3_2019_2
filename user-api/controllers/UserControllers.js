const Usuario = require('../models/ListaUser');

const controller = {

   recuperarPorUser: async (req,res)=>{    
      const { consulta } = req.body;
      const user = await Usuario.find({
         nome: {'$regex':consulta,'$options':'i'},
         email:{'$regex':consulta,'$options':'i'}
      });
      return res.json(user);
  },

   recuperarUser: async (req,res)=>{    
      Usuario.find()
      .then(results => res.json(results))
      .catch(err => res.send(err));
  },

  salvar: (req, res) => {
   const {nome, email, senha,confirmarSenha} = req.body;
   
     //nome e email
      if(nome && email){ 
         const user = req.body;
         Usuario
         .create(user)
         .then(userSava => res.status(201).json(userSava))
         .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar Usuario' })
            });
      }else{
        return res.status(400).json({ mensagem:'Nome ou E-mail não informado' });
      }
      //senha
      if(senha.length >= 8){ 
         if(senha.length == confirmarSenha.length){
   
         }else{
            return res.status(400).json({ mensagem:'Senha incompatível, favor repita!'});
         }
      }else{
        return res.status(400).json({ mensagem:'Senha deve conter 8 caracteres ' });
      }
}
};

module.exports = controller;