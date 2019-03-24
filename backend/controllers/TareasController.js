var manageTareas = require('../models/ManageTareas');

exports.fetchTareas = function (req, res) {
  manageTareas.fetchTareas(req.query.IdObra, req.query.titulo)
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.fetchImagesTarea = function (req, res) {
  manageTareas.fetchImagesTarea(req.query.IdTarea)
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.createTarea = function (req, res) {
  const tarea = {
    IdObra: req.body.IdObra,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  };

  manageTareas.createTarea(tarea)
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
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.updateTarea = function (req, res) {
  const IdTarea = req.body.tarea.IdTarea;
  const Titulo = req.body.tarea.Titulo;
  const Descripcion = req.body.tarea.Descripcion;
  const FechaInicio = req.body.tarea.FechaInicio;
  const FechaFin = req.body.tarea.FechaFin;

  manageTareas.updateTarea(IdTarea, Titulo, Descripcion, FechaInicio, FechaFin)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.finishTarea = function (req, res) {
  const IdTarea = req.body.IdTarea;
  
  manageTareas.finishTarea(IdTarea)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.unfinishTarea = function (req, res) {
  const IdTarea = req.body.IdTarea;
  
  manageTareas.unfinishTarea(IdTarea)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};


