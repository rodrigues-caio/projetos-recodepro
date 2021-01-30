const express = require('express');

const routes = require('./src/routes');

const server = express();
// ele observa a pasta public onde fica estilos, imagens e entre outros
server.use(express.static('public'));
// configurar a entrada de dados pelo corpo da requisição
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// configurar o motor javascript no html
server.set('view engine', 'ejs');
server.set('views', './src/app/views');
// extraimos as rotas e pedimos para o server utilizar
server.use(routes);
// criando porta do servidor
server.listen(3333, function () {
  console.log('Servidor rodando...');
});
