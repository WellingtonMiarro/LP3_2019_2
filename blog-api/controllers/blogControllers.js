const Blog = require('../models/ItemBlog');


const controller = {

   recuperaBlogs: async(req, res) => {
      const blogs = await Blog.find();
      return res.json(blogs);

   },

    salvar: (req, res) => {
       const { titulo } = req.body;
       const { texto } = req.body;

       if(titulo && texto){  
          const blog = req.body;
          Blog
          .create(blog)
          .then(listaSalva => res.status(201).json(listaSalva))
          .catch(erro =>{
             console.log(erro);
             res.status(500).json({mensagem:'Erro ao tentar salvar Blog'})
          });

       }else{
         return res.status(400).json({ mensagem:'Titulo ou Texto não Informado' });
       }
    },

    atualizar: (req, res) =>{
        const { id } = req.params;
        const blog = req.body;

        Blog
        .findByIdAndUpdate(id, blog)
        .exec()
        .then(blogAtualizada => {

          
           if(blogAtualizada){
              res.json({mensagem: "Blog Atualizada"})
           }else{
              res.status(404).json({ mensagem: "Blog não encontrada"})
           }
        }) 
        .catch(erro =>{
           console.log(erro);
           res.status(500).json({mensagem: 'Erro ao tentar atualizar o Blog'})
        }); 
   },
   remover: (req, res) => {
    const { id } = req.params;

    Blog
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
       res.status(500).json({mensagem: 'Erro ao tentar remover blog'})
    });

 }


};

module.exports = controller;