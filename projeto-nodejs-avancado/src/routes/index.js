const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ sucesso: 'Você chegou até aqui!' });
});

module.exports = routes;
