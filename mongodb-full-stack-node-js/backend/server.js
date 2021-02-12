const express = require('express');
const cors = require('cors');

const commentController = require('./src/app/controllers/commentController');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require('./src/config/database/connect');

server.post('/comentarios', commentController.post);
server.get('/comentarios', commentController.index);

server.listen(3334);
