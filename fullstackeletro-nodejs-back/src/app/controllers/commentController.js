const { response } = require('express');
const Comment = require('../models/Comment');

module.exports = {
  index: (request, response) => {
    Comment.all((comments) => {
      if (!comments) {
        return response.status(404).json({ error: 'Comments not found.' });
      }

      console.log(comments);
      return response.status(200).json(comments);
    });
  },

  post: (request, response) => {
    Comment.create(request.body, () => {
      return response.status(201).json({ success: 'Comment created.' });
    });
  },
};
