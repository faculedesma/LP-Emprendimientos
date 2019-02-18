var manageTareas = require('../models/ManageTareas');

exports.listTareas = function(res) {
  manageTareas.listTareas( function(consulta) {
    res.send(consulta);
  });
}

exports.newTarea = function(tarea) {
  return manageTareas.newTarea(tarea);
}


