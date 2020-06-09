const express = require("express");
const burger = require("../models/burger");

//ROUTES
const ormRoutes = {
  selectBurger: app.get("/burgers", function() {
    selectAll();
  }),
  
  insertBurger: app.post("/burgers", function() {
    insertOne();
  }),

  updateBurger: app.put("/burgers/:id", function() {
    updateOne();
  }),
  
  deleteBurger: app.delete("/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  })

}
  
module.exports = ormRoutes;