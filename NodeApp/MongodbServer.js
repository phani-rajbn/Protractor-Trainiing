module.exports = (function(){
    function getAllRecords(){
        var client = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/sampleDatabase';//connection url of UR database
        client.connect(url, function(err, db){
            console.log("Connected");
            var cursor = db.collection('Employees').find();
            cursor.each(function(err, doc){
                console.log(doc)//printing the results on the Console...
            })
            db.close();
        })
    }
    function insertRec(emp){
        var client = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/sampleDatabase';//connection url of UR database
        client.connect(url, function(err, db){
            console.log("Connected");
            db.collection("Employees").insertOne({
                "EmpID" : emp.EmpID,
                "Empname" : emp.Empname,
                "EmpAddress" :emp.EmpAddress
             })
            console.log("Employee inserted")
            db.close();
        })
    }

    function deleteRec(id){
        var client = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/sampleDatabase';//connection url of UR database
        client.connect(url, function(err, db){
            db.collection("Employees").deleteOne({"EmpID":id});
            db.close();
        })
    }
    return {
        GetAll : getAllRecords,
        AddEmp : insertRec,
        DeleteEmp : deleteRec
    }
})();

