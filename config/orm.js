const connection = require("./connection");

const orm = {
selectAll: (selectQuery) => {
    connection.query(`SELECT * FROM burgers;`, function(err, result){
        if (err) {
            return res.status(500).end();
          }
        console.log(result)
        selectQuery(result)
    })
   },

   insertOne: (selectQuery) => {
    connection.query(`INSERT INTO burgers (burger_name) VALUES (?)`, function(err, result){
        if (err) {
            return res.status(500).end();
          }
        console.log(result)
        selectQuery(result)
    })
   },

   updateOne: (selectQuery) => {
    connection.query(`UPDATE burgers SET burger_name = ? WHERE id = ?`, function(err, result){
        if (err) {
            return res.status(500).end();
          }
        console.log(result)
        selectQuery(result)
    })
   }
}

module.exports = orm;