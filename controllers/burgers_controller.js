const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgerObj = {
      burgers: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
