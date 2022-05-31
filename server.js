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

// calling all candidates from 'candidates'
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// get a single candidate based on id
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// delete a candidate based on id
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;
const params = [1, "Ronald", "Firbank", 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// default response for request not found
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
