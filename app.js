var Todos = require("./db.js").collection("todos");
var Todo  = require("./todo.js");
var express = require("express");
    
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var todoItems = [Todo("A"), Todo("B", true)];

app.get("/", function index(req,resp) {
    console.log(todoItems);   
    resp.render("index",{todos: todoItems});
});



app.listen(process.env.PORT || 3000);
