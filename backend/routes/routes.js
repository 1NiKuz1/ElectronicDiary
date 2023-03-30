const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/controller.auth.js");
const ScheduleController = require("../controllers/controller.schedule.js");
const JournalController = require("../controllers/controller.journal.js");
const AuthToken = require("../middlewares/verifyAuth.js");

//auth
router.post("/api/login", AuthController.login);
router.post("/api/logout", AuthController.logout);

//shedule
router.get(
  "/api/schedule",
  [AuthToken.verifyToken, AuthToken.isAdmin],
  ScheduleController.getSchedule
);
router.get(
  "/api/schedule/student",
  [AuthToken.verifyToken, AuthToken.isStudent],
  ScheduleController.getSheduleForStudent
);
router.get(
  "/api/schedule/teacher",
  [AuthToken.verifyToken, AuthToken.isTeacher],
  ScheduleController.getSheduleForTeacher
);

//journal
router.get(
  "/api/journal/student",
  [AuthToken.verifyToken, AuthToken.isStudent],
  JournalController.getStudentDiary
);

module.exports = router;
