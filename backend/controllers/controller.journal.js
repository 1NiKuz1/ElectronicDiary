const JournalModel = require("../models/model.journal.js");
const ApiError = require("../exceptions/api-error");

class JournalController {
  async getStudentDiary(req, res, next) {
    try {
      const result = await JournalModel.getStudentDiary(req.user.id);
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

module.exports = new JournalController();
