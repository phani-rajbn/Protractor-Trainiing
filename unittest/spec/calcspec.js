var app = require('../firstDemo');
var calcApp = new app.mathCalc();

describe('Suite for Calc Program', function(){
    beforeAll(function(){
        console.log("Before any case is executed")
    })
    
    beforeEach(function(){
        console.log("For every test case")
    })
    it('Should retain the default value', function(){
        expect(calcApp.currVal).toBeDefined();
        expect(calcApp.currVal).toEqual(0);
    })
    describe("Nested Suite", function(){
        beforeAll(function(){
            console.log("Nested First Time")
        })

        beforeEach(function(){
            console.log("Nested Every case")
        })

        it("Test Func",function(){
            console.log("Test func execcuted")
        })
    });
    it("Should add to the currVal", function(){
        expect(calcApp.add(5)).toEqual(5);
        expect(calcApp.add(5)).toEqual(10);
    })
    it("Should add multiple values", function(){
        expect(calcApp.addMany(1,2,3)).toEqual(6);
    });
    afterEach(function(){
        calcApp.currVal = 0;
    })
})
