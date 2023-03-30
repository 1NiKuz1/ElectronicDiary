const ScheduleModel = require("../models/model.schedule.js");
const ClassUserModel = require("../models/model.classes_users.js");
const ApiError = require("../exceptions/api-error");

class ScheduleController {
  async getSchedule(req, res, next) {
    try {
      const result = await ScheduleModel.getShedule();
      if (!result.length) {
        return next(ApiError.Error(401, "No records found"));
      }
      return res.status(200).send(result);
    } catch (err) {
      if (err instanceof ApiError) {
        return next(err);
      }
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  }

  async getSheduleForTeacher(req, res, next) {
    try {
      const result = await ScheduleModel.getSheduleForTeacher(req.user.id);
      if (!result.length) {
        return next(ApiError.Error(401, "No records found"));
      }
      return res.status(200).send(result);
    } catch (err) {
      if (err instanceof ApiError) {
        return next(err);
      }
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  }

  async getSheduleForStudent(req, res, next) {
    try {
      const classUser = await ClassUserModel.getClassUsersByUserId(req.user.id);
      if (!classUser) {
        return next(ApiError.Error(401, "Student not found"));
      }
      const result = await ScheduleModel.getSheduleForStudent(
        classUser.class_id
      );
      if (!result.length) {
        return next(ApiError.Error(401, "No records found"));
      }
      return res.status(200).send(result);
    } catch (err) {
      if (err instanceof ApiError) {
        return next(err);
      }
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  }
}

module.exports = new ScheduleController();
