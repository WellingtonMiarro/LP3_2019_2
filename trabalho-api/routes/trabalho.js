const express = require('express');
const contatoCtrl = require('../controller/trabalho_controller');

const router = express.Router();

router.get('/', contatoCtrl.recuperarTodos);
router.post('/', contatoCtrl.salvar);

module.exports = router;