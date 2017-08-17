const express = require("express");
const burger = require("../models/burger");

const router = express.router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var allBrgs = {
      burgers: data
    };
    console.log(burgers);
    //res.render("index", hbsObject);
  });
});

module.exports = router;
