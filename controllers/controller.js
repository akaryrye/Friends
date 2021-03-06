var express = require("express");
var router = express.Router();
var helpers = require("../models/helpers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  helpers.all(function(data) {
    console.log(data);
    res.render("index", {friends : data});
  });
});

router.get("/survey", function(req, res) {
    res.render("survey");
});

router.post("/api/friend", function(req, res) {
  helpers.create(
    ["name", "male", "scores"],
    [req.body.name, req.body.male, req.body.score],
    function(result) {res.json({id: result.insertId }); }
  );
});

router.put("/api/friend/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  helpers.update({
    male: req.body.male
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/friend/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  helpers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
