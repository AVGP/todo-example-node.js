var mongo = require("mongoskin");
var db = mongo.db("mongodb://cw:supersecret@alex.mongohq.com:10091/cw-todos");

module.exports = db;