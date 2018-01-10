var app = require('../firstDemo');

//Creates a Test Suite for U where each test suite has a set of test cases. 
xdescribe('Math Operations', function(){
    it('Function that adds 2 numbers', function(){
        var result = app.addFunc(13,12);
        expect(result).toBe(25); 
    })

    xit('Function that squares number', function(){
        var result = app.squareOfNum(2);
        expect(result).toBe(4); 
    })
})