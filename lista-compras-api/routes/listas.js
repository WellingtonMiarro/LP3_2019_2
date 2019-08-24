const express = require('express');
const listaCtrl = require('../controllers/ListaControllers');

/**
 * Cria  o roteador do Web Service relacionado a lista. 
 * Por meio do roteador será
 * possivel definir os nossos web services.
 */
const router = express.Router();


//Rota para o servico: /lista verbo HTTP: GET
router.get('/listas', listaCtrl.recuperarTodas);

module.exports = router;