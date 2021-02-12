const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://localhost:27017/fullstackeletro', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conectado com o banco!');
    })
    .catch((error) => {
      console.log(`Erro ao tentar a conexão! ${error}`);
    });
}

module.exports = connect();
