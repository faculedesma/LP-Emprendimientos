var express = require('express');
var router = express.Router();
var tareasController = require('../controllers/TareasController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*API Tareas*/
router.get('/tareas', tareasController.listTareas);
router.post('/tareas/create', tareasController.newTarea);
router.post('/tareas/delete', tareasController.deleteTarea);
router.post('/tareas/update', tareasController.updateTarea);
router.post('/tareas/finish', tareasController.finishTarea);
router.post('/tareas/unfinish', tareasController.unfinishTarea);


module.exports = router;
