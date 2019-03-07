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

exports.fetchImagesPaths = function (IdTarea) {
  const sql = `CALL lsp_list_images_paths(${IdTarea})`;
  return new Promise(function (resolve, reject) {
    db.query(sql, function (error, rows, fields) {
      if (error) reject(error);
      resolve(rows);
    });
  });
};