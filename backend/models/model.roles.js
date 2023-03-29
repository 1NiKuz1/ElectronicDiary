const db = require("../config/db.config.js");

class RoleModel {
  getRoles() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM roles", (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  getRole(data) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT role_name from roles WHERE id = ?`,
        [data],
        (err, results) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results[0]?.role_name);
          }
        }
      );
    });
  }

  getIdRole(data) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT id from Roles WHERE role_name = ?`,
        [data],
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

module.exports = new RoleModel();
