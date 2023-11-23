const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");

const User = require("../models/User");

exports.register = async (req, res) => {
  const user = await User.create(req.body);

  res
    .status(StatusCodes.CREATED)
    .json({ token: user.getToken(), name: user.getName() });
};
exports.login = async (req, res) => {
  res.send("login user");
};
