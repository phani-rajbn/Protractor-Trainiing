var app = require('../firstDemo');

//Creates a Test Suite for U where each test suite has a set of test cases. 
describe('Math Operations', function(){
    it('Function that adds 2 numbers', function(){
        var result = app.addFunc(13,12);
        expect(result).toBe(25); 
    })

    it('Function that squares number', function(){
        var result = app.squareOfNum(2);
        expect(result).toBe(4); 
    })
})

//Check for boolean values in JScode..
describe('boolean Testing', function(){
    it('Should return true', function(){
        var input = 'apple';
        var value = app.getResult(input)
        expect(value).toBeTruthy();
    })

    it('Should return false', function(){
        var input ='tomato';
        var value = app.getResult(input)
        expect(value).toBeFalsy();
    })
})

describe('Tests for Array Functions', function(){
    it("Should get length of the array as 100", function(){
        var data = app.getArray();
        expect(data.length).toEqual(100);
    })

    it("Check for Employee", function(){
        expect([2,3,4]).toContain(4);
        var data = app.getArray();
        expect(data).toContain({"id":5,"Name":"Bobbee Cankett","City":"bangalore"})
    })

    it("finds an employee from our data", function(){
        var emp = app.findEmp("Bobbee Cankett");
        expect(emp).toEqual({"id":5,"Name":"Bobbee Cankett","City":"bangalore"});
    })

    //create a test case for exception... 
    xit("throw an exception if the emp is not found", function(){
        var input ="apple";
        expect(function(){    
            app.findEmp(input)
        }).toThrow(new Error("Employee " + input + " not found"))
    })

    it("Should return null if the emp is not found", function(){
        var ouput = app.findEmp("abc")
        expect(ouput).toBeNull();
    })
})