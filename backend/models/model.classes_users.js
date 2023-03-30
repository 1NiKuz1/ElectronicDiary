const db = require("../config/db.config.js");

class ClassUserModel {
  getClassUsers() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM classes_users", (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  getClassUsersByUserId(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM classes_users WHERE user_id = ?",
        [id],
        (err, results) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results[0]);
          }
        }
      );
    });
  }
}

module.exports = new ClassUserModel();
