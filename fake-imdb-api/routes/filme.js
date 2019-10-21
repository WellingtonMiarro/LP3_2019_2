const express = require('express');
const FilmeCtrl = require('../controller/filmes_controller');



const router = express.Router();

router.get('/', FilmeCtrl.recuperarTodos);
router.post('/', FilmeCtrl.salvar);


module.exports = router;