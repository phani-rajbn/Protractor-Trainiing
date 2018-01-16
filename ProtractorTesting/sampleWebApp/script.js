angular.module('myApp',[]).controller('myController', function($scope){
    $scope.helloTo = {};
    $scope.helloTo.title ="World, AngularJs Program"
    $scope.person = {}
    $scope.person.name = "Rajesh";
    $scope.animals = ['Tiger Mogli','Samba, the Lion','Molly the elephant']
})