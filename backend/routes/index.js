var express = require('express');
var router = express.Router();
var tareasController = require('../controllers/TareasController');
var materialesController = require('../controllers/MaterialesController');
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

/*API Materiales*/
router.get('/materiales', materialesController.fetchMateriales);
router.post('/materiales/add', materialesController.addMaterial);
router.post('/materiales/delete', materialesController.deleteMaterial);
router.post('/materiales/update', materialesController.updateMaterial);
router.post('/materiales/delivered', materialesController.deliveredMaterial);
router.post('/materiales/pendent', materialesController.pendentMaterial);

/*API Obras*/
router.get('/obras', obrasController.fetchObras);

module.exports = router;
