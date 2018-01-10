//For creating complex web apps, http will not be able provide all the features of an enterprise web app. So we could use a npm package called EXPRESS. EXPRESS contains all the typical features required for a web app developvment capabilityes, it generates the required folders for creating a professional web app. express internally uses another module called express-generator that handles all the express related requests. 
//npm install -g express
// npm install -g express-generator
//If a package is to be used in multiple node apps, U could allow it to be created inside a common directory which is accessible to all the node apps. This is called Global folder available in the users directory. 
var express = require('express');
var fs = require("fs");
var bp = require('body-parser');

var app = express();
app.use(function(req, res, next){
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE, PUT');     
   next();
})
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

var employees = 
[
   {"ID": 123, "Name":"Phaniraj","Address":"BLR"},
   {"ID": 124, "Name":"Vinod","Address":"BLR"},
   {"ID": 125, "Name":"Suma","Address":"BLR"},
   {"ID": 126, "Name":"Hamsa","Address":"BLR"},
   {"ID": 127, "Name":"Raja","Address":"BLR"} 
]

app.get('/AllEmployees', function(req, res){
    var data = employees;
    res.send(JSON.stringify(data));
})

app.get('/Employees/:id', function(req, res){
    var empId = req.params.id
    for (var i = 0; i < employees.length; i++) {
        var element = employees[i];
        if(element.ID == empId)
            res.send(JSON.stringify(element));
        
    }
})
app.post('/AllEmployees', function(req, res){
    var item ='';
    console.log("got post request")
    var item = req.body;
    console.log(item);
    employees.push(item);
    res.send("Emp added successfully")
})

app.delete("/AllEmployees/:id", function(req, res){
    var id = req.params.id;
    for (var i = 0; i < employees.length; i++) {
        if(employees[i].ID == id){
            employees.splice(i, 1);
            res.send("Employee deleted successfully")
        }
        
    }
})
var server = app.listen(1234, function(){
    console.log("server is listening...")
})

