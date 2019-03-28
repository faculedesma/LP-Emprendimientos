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

exports.fetchMateriales = function (IdObra, material) {
  if(material === '') {
    const sql = `CALL lsp_list_materiales(${IdObra})`;
    return new Promise(function (resolve, reject) {
      db.query(sql, function (error, rows, fields) {
        if (error) reject(error);
        resolve(rows);
      });
    });
  }
  else {
    const sql = `CALL lsp_search_materiales(${IdObra}, '${material}')`;
    return new Promise(function (resolve, reject) {
      db.query(sql, function (error, rows, fields) {
        if (error) reject(error);
        resolve(rows);
      });
    });
  }
};

exports.addMaterial = function (material) {
  const sql = `CALL lsp_add_material_obra(${material.IdObra},'${material.Cantidad}', '${material.Nota}','Juan Jose Ledesma')`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.deleteMaterial = function (IdObra, IdMaterial) {
  const sql = `CALL lsp_delete_material(${IdObra},${IdMaterial})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.updateMaterial = function (IdObra, IdMaterial, Cantidad, Nota) {
  const sql = `CALL lsp_update_material(${IdObra}, ${IdMaterial}, '${Cantidad}','${Nota}')`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.deliveredMaterial = function (IdObra, IdMaterial) {
  const sql = `CALL lsp_delivered_material(${IdObra}, ${IdMaterial})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};

exports.pendentMaterial = function (IdObra, IdMaterial) {
  const sql = `CALL lsp_pendent_material(${IdObra}, ${IdMaterial})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, result, fields) {
      if (error) reject(error);
      resolve(result);
    });
  });
};