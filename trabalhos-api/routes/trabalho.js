const express = require('express');
const listaCtrl = require('../controllers/ListaController');




const router = express.Router();



router.get('/trabalhos', listaCtrl.recuperarTodas);

router.post('/trabalhos',listaCtrl.salvar);


router.get('/trabalhos', listaCtrl.recuperarItensPorDescricao);

module.exports = router;
