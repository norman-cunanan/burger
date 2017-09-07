var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update("burgers", condition, cb);
  },
  create: function(name, cb) {
  	orm.create("burgers", name, cb);
  }
};

// for burger controller
module.exports = burger;


