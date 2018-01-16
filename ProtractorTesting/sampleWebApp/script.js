var app = angular.module("myApp",[]);
app.controller('myController', function ($scope){
    $scope.helloTo = {};
    $scope.helloTo.title ="World, AngularJs Program"
    $scope.person ={}
    $scope.person.name ="";
    $scope.animals =['Tiger Mogli','Samba, the Lion','Molly the elephant' ]
})