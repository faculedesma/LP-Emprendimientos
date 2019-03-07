var manageImages = require('../models/ManageImages');

exports.fetchImagesPaths = function (req, res) {
  manageImages.fetchImagesPaths(req.query.IdTarea)
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};


