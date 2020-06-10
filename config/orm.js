const connection = require("./connection");

// Object for all our SQL statement functions.

// DELETE????
const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, data) {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: (res) => {
        connection.query(`INSERT INTO burgers (burger_name) VALUES (?)`, [req.body.burger_name], function (err, result) {
            if (err) {
                return res.status(500).end();
            }
            console.log({ id: result.insertId});
            res.json({ id: result.insertId });
        });
    },

    updateOne: (res) => {
        connection.query(`UPDATE burgers SET burger_name = ? WHERE id = ?`, [req.body.burger_name, req.params.id], function (err, data) {
            if (err) {
                return res.status(500).end();
            }
            else if (result.changedRows === 0) {
                return res.status(404).end();
              }

            res.status(200).end();
        });
    }
};

module.exports = orm;