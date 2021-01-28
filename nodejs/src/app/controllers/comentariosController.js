const Comentario = require('../models/comentario');

module.exports = {
  criarComentario: function (request, response) {
    Comentario.criar(request.body, function () {
      return response.json({ sucesso: 'mensagem inserido no banco!' });
    });
  },

  listarComentarios: function (request, response) {
    Comentario.listar(function (comentarios) {
      if (!comentarios) {
        return response.json({ erro: 'Nenhum comentário' });
      }

      return response.json(comentarios);
    });
  },
};
