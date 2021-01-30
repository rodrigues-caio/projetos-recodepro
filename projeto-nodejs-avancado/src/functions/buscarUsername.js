const fetch = require('node-fetch');

async function pegarUsuarioGithub(username) {
  const url = `https://api.github.com/users/${username}`;

  const pegarDados = await fetch(url);

  const dadosJSON = await pegarDados.json();

  return dadosJSON;
}

module.exports = pegarUsuarioGithub;
