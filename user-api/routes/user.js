const express = require('express');
const userCtrl = require('../controllers/UserControllers');

const router = express.Router();

router.post('/',userCtrl.salvar);

router.get('/', userCtrl.recuperarUser);
router.get('/usuario', userCtrl.recuperarPorUser);

module.exports = router;