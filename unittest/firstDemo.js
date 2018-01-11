var fs = require("fs");
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



exports.getResult = function(value){
    var fruits = [
        "apple","mango","orange"
    ]
    for (var key in fruits) {
        if(fruits[key] == value)
        return true;
    }
    return false;
}

exports.getArray = function(){
    var data = fs.readFileSync("../NodeApp/MyData.json");
    var json = JSON.parse(data.toString());
    console.log(json.length)
    return json;
    //get the JSON data from a json file...
    //return [2,3,4,5];
}

exports.findEmp = function(name){
    var data = fs.readFileSync("../NodeApp/MyData.json");
    var json = JSON.parse(data.toString());
    for (var i = 0; i < json.length; i++) {
        if(json[i].Name == name)
            return json[i];        
    }
    return null;
    //throw new Error("Employee " + name +" not found")
}   