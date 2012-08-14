var Todo = function(msg, done) {
    var self = {
        done: false,
        msg: "",
    };
    
    var _id = (new Date).getTime();
    
    if(msg === undefined) return false;
    self.msg = msg;
    self.done = (done ? true : false); //If parameter "done" is truthy, set Todo.done = true, else set it to false.
    
    self.setDone = function() {
        self.done = true;
        return self;
    };
    
    self.isDone = function() {
        return self.done;
    };
    
    self.getId = function() {
        return _id;
    };
    
    self.toString = function() {
        var stringified = self.msg;
        if(self.done) {
            stringified += " [done]";
        }
        return stringified;
    };
    
    return self;
};

module.exports = Todo;
