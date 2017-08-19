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
  burger.updateOne({
    devoured: true
  }, {id: req.params.id}, function() {
    res.redirect("/");
  });
});

module.exports = router;
