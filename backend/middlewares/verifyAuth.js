const userModel = require("../models/model.users.js");
const roleModel = require("../models/model.roles.js");
const ApiError = require("../exceptions/api-error");
const ROLES = ["admin", "teacher", "student"];

class AuthToken {
  verifyToken = (req, res, next) => {
    try {
      const token = req.headers["Authorization"];

      if (!token) {
        return next(ApiError.Error(403, "No token provided!"));
      }
    } catch (err) {
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  };

  #verifyRole = async (req, res, next) => {
    try {
      const user = await userModel.findUserByExtend("id", req.id);
      const role = await roleModel.getRole(user.role_id);
      if (role.name !== req.role) {
        return next(ApiError.Error(403, `Require ${req.role} role`));
      }
      next();
    } catch (err) {
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  };

  isAdmin = async (req, res, next) => {
    req.role = ROLES[0];
    await this.#verifyRole(req, res, next);
  };

  isTeacher = async (req, res, next) => {
    req.role = ROLES[1];
    await this.#verifyRole(req, res, next);
  };

  isStudent = async (req, res, next) => {
    req.role = ROLES[2];
    await this.#verifyRole(req, res, next);
  };
}

module.exports = new AuthToken();
