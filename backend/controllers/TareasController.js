var manageTareas = require('../models/ManageTareas');

exports.listTareas = function (req, res) {
  manageTareas.listTareas(req.query.titulo)
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.newTarea = function (req, res) {
  const tarea = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  };

  manageTareas.newTarea(tarea)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.deleteTarea = function (req, res) {
  const IdTarea = req.body.IdTarea;
  
  manageTareas.deleteTarea(IdTarea)
    .then(function (result) {
      console.log(result)
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};


