const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/controller.auth.js");

router.post("/api/login", AuthController.login);
router.post("/api/logout", AuthController.logout);

module.exports = router;
