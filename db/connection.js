const mysql = require("mysql2");

// connect to mysql database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "MySQLpass123!!",
    database: "election",
  },
  console.log("Connected to the election database")
);

module.exports = db;
