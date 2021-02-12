const mongoose = require('mongoose');

require('../models/Comentario');
const Comentario = mongoose.model('comentarios');

module.exports = {
  async post(request, response) {
    const { nome, comentario } = request.body;

    const comentarioCriado = await Comentario.create({
      nome,
      comentario,
      created_at: new Date(),
    });

    return response.json(comentarioCriado);
  },

  async index(request, response) {
    const comentarios = await Comentario.find();

    return response.json(comentarios);
  },
};
