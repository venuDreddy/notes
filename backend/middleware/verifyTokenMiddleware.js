const jwt = require("jsonwebtoken");

const verifyTokenMiddleWare = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;
  if (
    authHeader &&
    authHeader.split(" ").length == 2 &&
    authHeader.split(" ")[0] === "Bearer"
  ) {
    token = authHeader.split(" ")[1];
  }
  if (token === null) {
    return res.status(400).json({
      success: false,
      status: 400,
      error: "invalid Authorization Header",
    });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.jwtPayload = payload;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      error: "invalid Token",
    });
  }
};

module.exports = { verifyTokenMiddleWare };
