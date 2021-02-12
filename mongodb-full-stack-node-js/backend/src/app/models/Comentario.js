const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comentario = new Schema({
  nome: {
    type: String,
  },

  comentario: {
    type: String,
  },

  created_at: {
    type: String,
  },
});

mongoose.model('comentarios', Comentario);
