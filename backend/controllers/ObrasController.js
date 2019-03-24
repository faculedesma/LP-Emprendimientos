var manageObras = require('../models/ManageObras');

exports.fetchObras = function (req, res) {
  manageObras.fetchObras()
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};
