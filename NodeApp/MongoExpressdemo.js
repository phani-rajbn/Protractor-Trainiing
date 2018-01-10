var ex = require('express')();
var bp = require('body-parser')
var server = require('./MongodbServer');
ex.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE, PUT');     
    next();
 })
ex.use(bp.urlencoded({extended:false}));
ex.use(bp.json());

ex.get('/AllEmployees', function(req, res){
    server.GetAll(res);
    console.log("Getting Records");
})

ex.post("/AllEmployees", function(req, res){
    var data = req.body;
    server.AddEmp(data);
    res.end("Insertion completed")
})

ex.delete("/AllEmployees/:id", function(req, res){
    var empid = req.params.id;
    server.DeleteEmp(empid);
    res.end("Deletion completed");
})
ex.listen(1234, function(){
    console.log("Listening to port 1234")
})


 