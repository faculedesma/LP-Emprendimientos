var express = require('express');
var router = express.Router();
var tareasController = require('../controllers/TareasController');
var obrasController = require('../controllers/ObrasController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/*API Tareas*/
router.get('/tareas', tareasController.fetchTareas);
router.post('/tareas/create', tareasController.createTarea);
router.post('/tareas/delete', tareasController.deleteTarea);
router.post('/tareas/update', tareasController.updateTarea);
router.post('/tareas/finish', tareasController.finishTarea);
router.post('/tareas/unfinish', tareasController.unfinishTarea);
router.get('/tareas/images', tareasController.fetchImagesTarea);

/*API Obras*/
router.get('/obras', obrasController.fetchObras);

module.exports = router;
