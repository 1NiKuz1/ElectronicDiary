const db = require("../config/db.config.js");

class UserModel {
  findUserByExtend(extend, data) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * from USERS WHERE ${extend} = "${data}"`,
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

  setToken(token, id) {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE users SET token = ? WHERE id = ?`,
        [token, id],
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

module.exports = new UserModel();
