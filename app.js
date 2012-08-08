var Todos = require("./db.js").collection("todos"),
    Todo  = require("./todo.js"),
    express = require("express");
    
var app = express();

app.get("/", function index(req,resp) {
        resp.render("index",{todos: [1,2,3]});
});



app.listen(process.env.PORT || 3000);