const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",              
  user: "root",                   
  password: null,               
  database: "pragmanx_tweakstudy" 
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL database:");
});

module.exports = db;
