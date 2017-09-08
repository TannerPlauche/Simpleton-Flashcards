var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let params = req.params; // {id: lkjsdlkf}
  let query = req.query; //?name=tanner => {name:"Tanner"}
      axios.get("/search", query)
  console.log("getting");
  res.send({ msg: "Got it." });
});

module.exports = router;
