const express = require('express');
const routes = express.Router();

const produtosController = require('../app/controllers/produtosController');
const comentariosController = require('../app/controllers/comentariosController');

routes.get('/', produtosController.listar);

routes.post('/comentarios', comentariosController.criarComentario);

routes.get('/comentarios', comentariosController.listarComentarios);

module.exports = routes;
