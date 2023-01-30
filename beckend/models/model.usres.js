const db = require("../config/db.config.js");

//Здесь модели
exports.getUsers = (result) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
