const db = require('../../config/database');

module.exports = {
  all(callback) {
    db.query(
      `
      SELECT * FROM produto
    `,
      (err, results) => {
        if (err) throw `Database Error: ${err}`;

        callback(results);
      }
    );
  },
};
