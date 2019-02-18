var mysql = require('mysql');
var databaseConfig = require('../config/Database');

var db = mysql.createConnection({
  host: databaseConfig.host,
  user: databaseConfig.user,
  password: databaseConfig.password,
  database: databaseConfig.database,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

//List Tareas
exports.listTareas = function(fn) {
  const sql = 'CALL lsp_list_tareas()';
  db.query(sql, function (err, result) {
    if (err) throw err;
    fn(result[0]);
  });
}

//New Tarea
exports.newTarea = function(req, fn) {
  const titulo = req.titulo;
  const descripcion = req.descripcion;
  const sql = `CALL lsp_new_tarea(1,'${titulo}', '${descripcion}','Juan Jose Ledesma')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    fn(result[0][0].Mensaje);
  });
}