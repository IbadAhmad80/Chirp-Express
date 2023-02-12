const { authService } = require("../services");
const { formatResponse } = require("../helpers/utility");
const statusCodes = require("../constants/statusCodes");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const response = await authService.register(req.body);

    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || statusCodes.badRequest)
      .json(
        formatResponse(statusCode || statusCodes.badRequest, "error", message)
      );
  }
};

const login = async (req, res) => {
  try {
    const response = await authService.login(req.body);

    if (response) {
      return res.status(response.statusCode).json(response);
    }
  } catch (error) {
    const { message, statusCode } = error;
    res
      .status(statusCode || statusCodes.badRequest)
      .json(
        formatResponse(statusCode || statusCodes.badRequest, "error", message)
      );
  }
};

module.exports = {
  register,
  login,
};
