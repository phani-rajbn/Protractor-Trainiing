module.exports = (function(){
    function getAllRecords(){
        var client = require('mongodb').MongoClient;
        var url = 'mongodb://localhost:27017/sampleDatabase';//connection url of UR database
        client.connect(url, function(err, db){
            console.log("Connected");
            var list =[]
            var cursor = db.collection('Employees').find();
            cursor.each(function(err, doc){
                list.push(doc);
            })
            db.close();  
            return list;
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
            console.log(typeof(id))
            var empid = parseInt(id);
            db.collection("Employees").deleteOne({"EmpID":empid});
            console.log("Employee deleted");
            db.close();            
        })
    }
    return {
        GetAll : getAllRecords,
        AddEmp : insertRec,
        DeleteEmp : deleteRec
    }
})();

