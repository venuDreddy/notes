const db = require("../db");
const signup = async (req, res) => {
  console.log(req.body);
  const { username, password, email } = req.body;
  try {
    //checking if user with given username already exists
    const query = await db.any(
      `select id from users where username='${username}'`
    );
    //if query.length==0 username is already taken
    if (query.length != 0)
      res
        .status(401)
        .json({ success: false, status: 401, error: "username already taken" });
    else {
      //inserting username and password
      //using pgcrypto to encrypt password
      await db.none(
        `INSERT INTO users(username,password,email) VALUES('${username}',crypt('${password}',gen_salt('bf')),'${email}')`
      );
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
