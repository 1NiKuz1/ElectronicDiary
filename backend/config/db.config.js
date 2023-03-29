const mysql = require("mysql2");

// Измените конфигурацию базы данных
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "electronic_journal",
});

module.exports = db;
