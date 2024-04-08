const db = require("../db");
const signup = async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  try {
    //checking if user with given username already exists
    const queryString = `select id from users where username=$1`;
    const values = [username];
    const query = await db.any(queryString, values);
    //if query.length==0 username is already taken
    if (query.length != 0)
      res
        .status(401)
        .json({ success: false, status: 401, error: "username already taken" });
    else {
      //inserting username and password
      //using pgcrypto to encrypt password
      const query = `INSERT INTO users(username,password,email) VALUES($1,crypt($2,gen_salt('bf')),$3)`;
      const signUpValues = [username, password, email];
      await db.none(query, signUpValues);
      res.status(200).json({
        success: true,
        data: { message: `user registered successfully` },
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, status: 500, error: "internal server error" });
  }
};

module.exports = { signup };
