const uuid = require("uuid");
const userModel = require("../models/model.users.js");
const roleModel = require("../models/model.roles.js");
const ApiError = require("../exceptions/api-error");

class AuthController {
  async login(req, res, next) {
    try {
      const user = await userModel.findUserByExtend("login", req.body.login);
      if (!user) {
        return next(ApiError.Error(401, "Login not found"));
      }

      if (req.body.password != user.password) {
        return next(ApiError.Error(401, "Invalid password"));
      }
      const token = uuid.v4();
      await userModel.setToken(token, user.id);
      const role = await roleModel.getRole(user.role_id);

      return res.status(200).send({
        id: user.id,
        login: user.login,
        role: role,
        token: token,
      });
    } catch (err) {
      if (err instanceof ApiError) {
        return next(err);
      }
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  }

  async logout(req, res, next) {
    try {
      const token = req.headers["authorization"].replace("Bearer ", "");
      if (!token) {
        return next(ApiError.Error(403, "No token provided!"));
      }

      const user = await userModel.findUserByExtend("token", token);
      if (!user) {
        return next(ApiError.Error(403, "Not authorized"));
      }

      await userModel.setToken(null, user.id);

      return res.status(200).send({
        message: "Logout",
      });
    } catch (err) {
      if (err instanceof ApiError) {
        return next(err);
      }
      next(ApiError.BadRequest(500, "invalid database request", err));
    }
  }
}

module.exports = new AuthController();
