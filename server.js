const express = require("express");
const res = require("express/lib/response");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

// express middleware:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// default response for request not found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
