const db = require('../../config/database');

module.exports = {
  all(callback) {
    db.query(
      `
      SELECT * FROM comentarios
    `,
      (err, results) => {
        if (err) throw `Database Error: ${err}`;

        callback(results);
      }
    );
  },

  create(data, callback) {
    db.query(
      `
      INSERT INTO comentarios 
      (nome, mensagem) VALUES ('${data.nome}', '${data.mensagem}')
    `,
      (err, results) => {
        if (err) throw `Database Error: ${err}`;

        callback();
      }
    );
  },
};
