const connection = require("./connection");

const orm = {
    selectAll: (res) => {
        connection.query(`SELECT * FROM burgers;`, function (err, data) {
            if (err) {
                return res.status(500).end();
            }
            console.log(data)
            res.json({ burgers: data });
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