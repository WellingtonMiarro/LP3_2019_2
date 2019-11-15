const express = require('express');
const listaCtrl = require('../controllers/ListaControllers');



/**
 * Cria  o roteador do Web Service relacionado a lista. 
 * Por meio do roteador será
 * possivel definir os nossos web services.
 */
const router = express.Router();


//Rota para o servico: /lista verbo HTTP: GET
//router.get('/', listaCtrl.recuperarTodas);
/**
 * ROTA para o serviço:/lista se o verbo é diferente nao acontece conflito 
 * Verbo HTTP: POST
 * metodo post para MANDAR
 */
router.post('/',listaCtrl.salvar);

//Rota para o serviço /lista/itens
//verbo HHTP: Get
router.get('/itens', listaCtrl.recuperarItens);

module.exports = router;