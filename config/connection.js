// Set up MYSQL connection
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_URL,
  database: "burgers_db",
});

// Make connection
connection.connect(function (err) {
  if (err) {
    console.log("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});
// Export module
module.exports = connection;
