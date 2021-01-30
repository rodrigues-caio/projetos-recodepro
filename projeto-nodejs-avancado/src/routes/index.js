const { Router } = require('express');
const pegarUsuarioGithub = require('../functions/buscarUsername');

const routes = Router();

routes.get('/', (request, response) => {
  return response.render('home');
});

routes.post('/perfil', async (request, response) => {
  const { username, cor } = request.body;

  const { avatar_url, name, bio } = await pegarUsuarioGithub(username);

  const usuario = {
    avatar_url,
    name,
    bio,
    cor,
  };

  return response.render('perfil', { usuario });
});

module.exports = routes;
