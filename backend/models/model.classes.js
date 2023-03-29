const db = require("../config/db.config.js");

class ClassModel {
  getClasses() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM classes", (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = new ClassModel();
