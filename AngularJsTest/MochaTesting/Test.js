var assert = require('assert');
var vehicle = require('./vehicle').vehicle;

describe('hooks', function(){
    before(function(){
        console.log("Runs before all the tests in this block")
    })

    beforeEach(function(){
        console.log("Runs before each of tests in this block")
    })

    after(function(){
        console.log("Runs after all the tests in this block")
    })

    afterEach(function(){
        console.log("Runs after each of tests in this block")
    })

    it("Tests for runnning", function(){
        assert.equal(1, 1);
    })

    it("Tests for runnning", function(){
        assert.equal("Sample", "Sample");
    })

})







describe('ArrayDemo', function(){
    it("should return -1 of data is not found", function(){
        assert.equal(-1, [1,2,3].indexOf(5));
        assert.equal(-1, [1,2,3].indexOf(0));
    })
})

describe('vehicle testing', function(){
    describe('Test For Fuel', () =>{
        it('should be 71', ()=>{
            assert.equal(71, vehicle.getFuelCost('petrol'))
        });
        it('should be 61', ()=>{
            assert.equal(61, vehicle.getFuelCost('diesel'))
        });
    })
})

//creating asyc tests...
// describe('User', function(){
//     describe("save function", function(){
//         it('save without errors', function (done) {
//             var user = {"Username":"Phaniraj"};
//             user.save(function(err){
//                 console.log(err);
//                 done();
//             })
//         })
//     })
// })

