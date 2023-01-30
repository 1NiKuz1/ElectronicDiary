const mysql = require("mysql2");

// Измените конфигурацию базы данных
const db = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database",
});

module.exports = db;
