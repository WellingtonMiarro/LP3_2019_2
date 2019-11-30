const express = require('express');
const blogCtrl = require('../controllers/blogControllers');
const router = express.Router();


router.get('/', blogCtrl.recuperaBlogs);
router.post('/',blogCtrl.salvar);
router.put('/:id', blogCtrl.atualizar);
router.delete('/:id', blogCtrl.remover);

module.exports = router;