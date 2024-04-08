const db = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //checking if user exists
    //using pgcrypto to decrypt password
    const queryString = `SELECT username from users where username=$1 AND password=crypt($2,password)`;
    const values = [username, password];
    const query = await db.any(queryString, values);
    //query.length==0 no user exits with given credentials
    if (query.length == 0)
      return res.status(401).json({
        success: false,
        status: 401,
        error: `incorrect username or password`,
      });
    const info = { data: { username: `${username}` } };
    //generating jwt token
    const token = jwt.sign(info, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });
    //sending token in the response
    res.status(200).json({
      success: true,
      data: { message: `welcome ${username}`, token: `${token}` },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, status: 500, error: "internal server error" });
  }
};
module.exports = { login };
