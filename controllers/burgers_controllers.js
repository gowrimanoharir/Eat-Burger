const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var allBrgs = {
      burgers: data
    };
    //console.log(allBrgs);
    res.render("index", allBrgs);
  });
});


router.post("/", function(req, res) {
  burger.insertOne(req.body.name, function() {
    res.redirect("/");
  });
});


router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
