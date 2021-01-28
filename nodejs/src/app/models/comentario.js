const db = require('../../config/database');
const { listar } = require('../controllers/produtosController');

module.exports = {
  criar: function (dados, callback) {
    const { nome, mensagem } = dados;

    const consulta = `
      INSERT INTO 
      comentarios (nome, mensagem) 
      VALUES ('${nome}', '${mensagem}')`;
    db.query(consulta, function (err, resultado) {
      if (err) {
        return new Error(`Erro no banco: ${err}`);
      }

      callback();
    });
  },

  listar: function (callback) {
    const consulta = 'SELECT * FROM comentarios';

    db.query(consulta, function (erro, resultado) {
      if (erro) {
        return new Error(`Erro no banco: ${erro}`);
      }

      callback(resultado);
    });
  },
};
