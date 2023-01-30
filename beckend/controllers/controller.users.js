const { getUsers } = require("../models/model.users.js");

//Здесь будут контроллеры

exports.showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
