const { Filme } = require('../database/db');

const controller = {
    
    salvar: (req, res) => {
        const filme = req.body;

        Filme
            .create(filme)
            .then(filmeSalvo => res.status(201).json(filmeSalvo))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar salvar o Filme');
            });
    },
    recuperarTodos: (req, res) => {
        Filme
            .findAll()
            .then(filme => res.json(filme))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar recuperar o Filme');
            });
    }
    

    
};

module.exports = controller;