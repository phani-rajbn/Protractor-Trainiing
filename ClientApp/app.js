//Client App....
// var app = require('phani_nodeapp')();
// app.AddToCart({"name":"apple"});
// app.AddToCart({"name":"mango"});
// app.AddToCart({"name":"orange"});
// var data = app.GetAllItems();
// for(i = 0; i<data.length;i++)
//     console.log(data[i].name);

//create an Angular Service...
//create a controller which consumes the service...
var app = angular.module('empRestClient', []);
app.service('empService', function($http){
    var url = 'http://localhost:1234/AllEmployees'
    var getAll = function(){
        return $http.get(url);
    }
    var find = function(id){
        var u = 'http://localhost:1234/Employees/' + id
        return $http.get(u);
    }
    var insert = function(emp){
        var req = $http({
            method:'POST',
            url :url,
            data: emp
        });
        return req;
    }
    return{
        GetAllEmployees: getAll,
        FindEmployee: find,
        AddNewEmployee : insert
    }
});

app.controller('empController', function($scope, empService){
    getAllRecords();
    function getAllRecords() {
        var p = empService.GetAllEmployees();
        p.then(function(res){
            $scope.AllEmployees = res.data;
        })
    }

    $scope.find = function(id){
        var p = empService.FindEmployee(id);
        p.then(function(res){
            $scope.selectedEmp = res.data;
        })
    }
})