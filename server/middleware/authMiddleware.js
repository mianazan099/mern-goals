const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      let token = req.headers.authorization.split(" ")[1];
      const tokenData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(tokenData.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not Authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = protect;
