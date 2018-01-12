var assert = require('assert');
var vehicle = require('./vehicle').vehicle;

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

