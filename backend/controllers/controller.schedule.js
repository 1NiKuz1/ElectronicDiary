const ScheduleModel = require("../models/model.schedule.js");
const ClassUserModel = require("../models/model.classes_users.js");
const ClassModel = require("../models/model.classes.js");
const ApiError = require("../exceptions/api-error");

class ScheduleController {
  async getSchedule(req, res, next) {
    try {
      const result = await ScheduleModel.getShedule();

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
