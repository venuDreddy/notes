const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5060;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//for login
const loginRouter = require("./routes/login");
app.use("/api/login", loginRouter);
//for signup
const signupRouter = require("./routes/signup");
app.use("/api/signup", signupRouter);
//for notes
const notesRouter = require("./routes/notes");
app.use("/api/notes", notesRouter);

app.use("*", (req, res) => {
  res
    .status(404)
    .json({ success: false, status: 404, error: `Resource not found` });
});
//server setup
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
