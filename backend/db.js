const pg = require("pg-promise")();
const dotenv = require("dotenv");
dotenv.config();
const conString = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const db = pg(conString);

module.exports = db;
