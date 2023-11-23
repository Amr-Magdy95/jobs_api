const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");
const UnauthenticatedError = require("../errors/unauthenticated");

const User = require("../models/User");

exports.deleteAllData = async (req, res) => {
  await User.deleteMany({});
};

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ token: user.getToken(), name: user.getName() });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new BadRequestError("Email and Password must be provided");
  const user = await User.findOne({ email });
  if (!user) throw new UnauthenticatedError("Invalid Credentials");
  const passwordFlag = await user.comparePasswords(password);
  if (!passwordFlag) throw new UnauthenticatedError("Invalid Credentials");
  res
    .status(StatusCodes.OK)
    .json({ user: user.getName(), token: user.getToken() });
};
