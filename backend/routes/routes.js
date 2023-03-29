const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/controller.auth.js");
const ScheduleController = require("../controllers/controller.schedule.js");

//auth
router.post("/api/login", AuthController.login);
router.post("/api/logout", AuthController.logout);

//shedule
router.get("/api/schedule", ScheduleController.getSchedule);

module.exports = router;
