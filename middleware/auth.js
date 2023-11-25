const User = require("../models/User");
const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/unauthenticated");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    throw new UnauthenticatedError("Invalid Token");
  try {
    const user = jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET);
    const foundUser = await User.findById({ _id: user.userId }).select(
      "-password"
    );
    req.user = { id: foundUser._id, name: foundUser.name };
    console.log(foundUser);
    next();
  } catch (err) {
    throw new UnauthenticatedError("Invalid Token");
  }
};

module.exports = authenticateUser;
