const express = require("express");
const router = express.Router();
const { showUsers } = require("../controllers/controller.users.js");

//Здесь роуты

router.get("/users", showUsers);

module.exports = router;
