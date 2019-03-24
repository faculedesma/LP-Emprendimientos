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

exports.fetchTareas = function (IdObra, titulo) {
  if(titulo === '') {
    const sql = `CALL lsp_list_tareas(${IdObra})`;
    return new Promise(function (resolve, reject) {
      db.query(sql, function (error, rows, fields) {
        if (error) reject(error);
        resolve(rows);
      });
    });
  }
  else {
    const sql = `CALL lsp_search_tareas(${IdObra}, '${titulo}')`;
    return new Promise(function (resolve, reject) {
      db.query(sql, function (error, rows, fields) {
        if (error) reject(error);
        resolve(rows);
      });
    });
  }
};

exports.fetchImagesTarea = function (IdTarea) {
  const sql = `CALL lsp_fetch_images_tarea(${IdTarea})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, rows, fields) {
      if (error) reject(error);
      resolve(rows);
    });
  });
};

exports.createTarea = function (tarea) {
  const sql = `CALL lsp_create_tarea(${tarea.IdObra},'${tarea.titulo}', '${tarea.descripcion}','Juan Jose Ledesma')`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.deleteTarea = function (IdTarea) {
  const sql = `CALL lsp_delete_tarea(${IdTarea})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.updateTarea = function (IdTarea, Titulo, Descripcion) {
  const sql = `CALL lsp_update_tarea(${IdTarea},'${Titulo}','${Descripcion}')`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.finishTarea = function (IdTarea) {
  const sql = `CALL lsp_finish_tarea(${IdTarea})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.unfinishTarea = function (IdTarea) {
  const sql = `CALL lsp_unfinish_tarea(${IdTarea})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};