const mysql = require("mysql");
const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "password",
  database: "burgers_db",
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + connection.threadId);
});


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

 