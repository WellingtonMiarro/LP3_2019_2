const express = require('express');
const listaCtrl = require('../controllers/ListaControllers');



/**
 * Cria  o roteador do Web Service relacionado a lista. 
 * Por meio do roteador será
 * possivel definir os nossos web services.
 */
const router = express.Router();


//Rota para o servico: /lista verbo HTTP: GET
router.get('/', listaCtrl.recuperaListas);
/**
 * ROTA para o serviço:/lista se o verbo é diferente nao acontece conflito 
 * Verbo HTTP: POST
 * metodo post para MANDAR
 */
router.post('/',listaCtrl.salvar);

/* Rota para os serviços: /listas/:id 
Verbo HTTP: PUT
*/ 
router.put('/:id', listaCtrl.atualizar);

/*
    Rota para o serviço /listas/:id 
    verbo HTTP; DELETE
*/ 
router.delete('/:id', listaCtrl.remover);

//Rota para o serviço /lista/itens
//verbo HHTP: Get
router.get('/itens', listaCtrl.recuperarItens);
router.get('/descricao', listaCtrl.recuperaPorDescricao);

module.exports = router;