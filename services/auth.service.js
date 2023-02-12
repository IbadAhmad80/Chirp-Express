const { createResponse, formatResponse } = require("../helpers/utility");
const { BaseError } = require("../helpers/errorHandling");
const validate = require("../helpers/validationSchema");
const statusCodes = require("../constants/statusCodes");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateJWTToken = require("../helpers/generateJWTToken");

const register = async (data) => {
  const { firstName, lastName, email, password, gender, dateOfBirth } = data;

  const response = validate.registerUserSchema.validate({
    firstName,
    lastName,
    email,
    password,
    gender,
    dateOfBirth,
  });

  if (typeof response.error !== "undefined") {
    return createResponse(response);
  }

  const oldUser = await User.findOne({ email });

  console.log(oldUser);

  if (oldUser) {
    throw new BaseError("User already exist", statusCodes.conflict);
  }

  await User.create({
    firstName,
    lastName,
    email: email.toLowerCase(), // sanitize: convert email to lowercase
    password: await bcrypt.hash(password, 10),
    gender,
    dateOfBirth,
  });
  const user = await User.findOne({ email });

  if (user) {
    const accessToken = generateJWTToken(user);

    return formatResponse(statusCodes.created, true, "User account created", {
      data: {
        user,
      },
      accessToken,
    });
  }
  throw new BaseError("Unable to register a user", statusCodes.unprocessable);
};

const login = async (data) => {
  const { email, password } = data;

  if (!(email && password))
    throw new BaseError(
      "Email and password are required!",
      statusCodes.badRequest
    );

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    if (user.status === "inactive") {
      throw new BaseError(
        "Your account is restricted, please contact to support team.",
        statusCodes.unavailableForLegalReasons
      );
    }

    const accessToken = generateJWTToken(user);

    return formatResponse(statusCodes.ok, true, "Login successfully", {
      data: {
        user,
      },
      accessToken,
    });
  }
  throw new BaseError("Invalid Credentials", statusCodes.notFound);
};

module.exports = {
  register,
  login,
};
