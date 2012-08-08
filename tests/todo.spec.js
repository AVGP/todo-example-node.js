var Todo = require("../todo.js"),
    Todos = require("../db.js").collection("todos");


describe("when a todo is created", function() {
    it("should fail when the message is undefined", function() {
        expect(Todo.create()).toBe(false);
    });
    
    it("should not be marked as done, if the state is not specified", function() {
        expect(Todo.create("Test").isDone()).toBe(false);
    });
    
    it("should be possible to create it with state 'done'", function() {
        expect(Todo.create("Test", true).isDone()).toBe(true);
    });
});

describe("when a todo is marked as done", function() {
    it("should tell me so", function() {
        expect(Todo.create("Test").setDone().isDone()).toBe(true);
    });
    
    it("should tell me so when I call toString", function() {
        expect(Todo.create("Test",true).toString()).toBe("Test [done]");
    });
});