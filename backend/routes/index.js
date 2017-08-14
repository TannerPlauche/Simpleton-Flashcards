var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("getting");
  res.send({ msg: "Got it." });
});

module.exports = router;
