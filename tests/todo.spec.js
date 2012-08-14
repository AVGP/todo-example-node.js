var Todo = require("../todo.js");


describe("when a todo is created", function() {
    it("should fail when the message is undefined", function() {
        expect(Todo()).toBe(false);
    });
    
    it("should not be marked as done, if the state is not specified", function() {
        expect(Todo("Test").isDone()).toBe(false);
    });
    
    it("should be possible to create it with state 'done'", function() {
        expect(Todo("Test", true).isDone()).toBe(true);
    });
    
    it("should have an id", function() {
        expect(Todo("Test").getId()).not.toBe(undefined);
    });
});

describe("when a todo is marked as done", function() {
    it("should tell me so", function() {
        expect(Todo("Test").setDone().isDone()).toBe(true);
    });
    
    it("should tell me so when I call toString", function() {
        expect(Todo("Test",true).toString()).toBe("Test [done]");
    });
});
