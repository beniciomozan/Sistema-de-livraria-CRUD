const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

router.get('/livros', livrosController.getTodosLivros);
router.get('/livros/:isbn', livrosController.getLivroById);
router.post('/livros', livrosController.criarLivro);
router.put('/livros/:isbn', livrosController.atualizarLivro);
router.delete('/livros/:isbn', livrosController.deletarLivro);

module.exports = router;