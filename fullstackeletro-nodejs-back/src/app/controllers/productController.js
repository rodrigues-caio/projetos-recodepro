const Product = require('../models/Product');

module.exports = {
  index: (request, response) => {
    Product.all(function (products) {
      if (!products) {
        return response.status(404).json({ error: 'Products not found' });
      }

      console.log(products);
      return response.status(200).json(products);
    });
  },
};
