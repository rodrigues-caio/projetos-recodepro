const express = require('express');
const productController = require('./src/app/controllers/productController');
const commentController = require('./src/app/controllers/commentController');

const server = express();

server.use(express.json());

server.get('/produtos', productController.index);

server.get('/comentarios', commentController.index);
server.post('/comentarios', commentController.post);

server.listen(3333);
