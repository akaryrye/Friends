var orm = require("../config/orm.js");

// Determine the table to access
var table = "friends";

var helpers = {
  all: function(cb) {
    orm.all(table , function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create(table , cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(table , objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(table , condition, function(res) {
      cb(res);
    });
  }
};

module.exports = helpers;