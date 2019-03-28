var manageMateriales = require('../models/ManageMateriales');

exports.fetchMateriales = function (req, res) {
  manageMateriales.fetchMateriales(req.query.IdObra, req.query.material)
    .then(function (rows) {
      res.send(rows);
    })
    .catch(function (error) {
      console.log(error);
    });
};


exports.addMaterial = function (req, res) {
  const tarea = {
    IdObra: req.body.IdObra,
    cantidad: req.body.cantidad,
    nota: req.body.nota
  };

  manageMateriales.addMaterial(tarea)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.deleteMaterial = function (req, res) {
  const IdObra = req.body.IdObra;
  const IdMaterial = req.body.IdMaterial;
  
  manageMateriales.deleteMaterial(IdObra, IdMaterial)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.updateMaterial = function (req, res) {
  const IdObra = req.body.material.IdObra;
  const IdMaterial = req.body.material.IdMaterial;
  const Cantidad = req.body.material.Cantidad;
  const Nota = req.body.material.Nota;

  manageMateriales.updateMaterial(IdObra, IdMaterial, Cantidad, Nota)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.deliveredMaterial = function (req, res) {
  const IdObra = req.body.material.IdObra;
  const IdMaterial = req.body.material.IdMaterial;
  
  manageMateriales.deliveredMaterial(IdObra, IdMaterial)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.pendentMaterial = function (req, res) {
  const IdObra = req.body.IdObra;
  const IdMaterial = req.body.IdMaterial;
  
  manageMateriales.pendentMaterial(IdObra, IdMaterial)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};


