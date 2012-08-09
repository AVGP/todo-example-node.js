var Todos = require("./db.js").collection("todos");
var Todo  = require("./todo.js");
var express = require("express");
    
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get("/", function index(req,resp) {
        resp.render("index",{todos: [1,2,3]});
});



app.listen(process.env.PORT || 3000);