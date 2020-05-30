// Set up MYSQL connection
const mysql = require("mysql");
const connection; 

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_KEY,
    database: "burgers_db",
  });
}

// Make connection
connection.connect(function (err) {
  if (err) {
    console.log("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});
// Export connection
module.exports = connection;
