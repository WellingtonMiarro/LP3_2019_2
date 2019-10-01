const { Trabalho } = require('../database/db');

const controller = {
    salvar: (req, res) => {
        const trab = req.body;

        Trabalho
            .create(trab)
            .then(trabSalvo => res.status(201).json(trabSalvo))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar salvar o Trabalho');
            });
    },
    recuperarTodos: (req, res) => {
        Trabalho
            .findAll()
            .then(trab => res.json(trab))
            .catch(erro => {
                console.log(erro);
                res.status(500).json('Erro ao tentar recuperar o Trabalho');
            });
    }

    
};

module.exports = controller;