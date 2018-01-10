var exports = module.exports = { }
exports.addFunc = function(v1, v2){
    return v1 + v2;
}

exports.squareOfNum = function(v){
    return v * v;
}

exports.mathCalc = function(){
    this.currVal = 0;

    this.add = function(v1){
        this.currVal += v1;
        return this.currVal;
    }
    this.addMany = function(){
        var sum = this.currVal;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i]; 
        }
        this.currVal = sum;
        return this.currVal;
    }
    this.minus = function(v){
        this.currVal -= v;
        return this.currVal;
    }
}