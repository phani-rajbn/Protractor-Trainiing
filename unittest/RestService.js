var app = require('express')();
var exports = module.exports ={};
app.get('/', function(req,res){
    res.end("Hello World")
})

var server = app.listen(1234, function(){
    console.log("Server at 1234")
})

exports.closeServer = function(){
    server.close();
}