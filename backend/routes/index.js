var express = require('express');
var router = express.Router();
var tareasController = require('../controllers/TareasController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*API Tareas*/
router.get('/tareas', tareasController.listTareas);
router.post('/tareas/newTarea', function (req, res) {
  tarea = {
    titulo: req.param('titulo'),
    descripcion: req.param('descripcion')
  }
  tareasController.newTarea(tarea);
});

module.exports = router;
