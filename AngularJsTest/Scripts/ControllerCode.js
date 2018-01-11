var app = angular.module("app", []);
var controller = app.controller("myController", function($scope){  
    $scope.math = {}
    
    $scope.result = 0
    $scope.value1 = 0
    $scope.value2 = 0
    
    $scope.math.addFunc = function(){
        $scope.result = $scope.value1  + $scope.value2
    }

    $scope.math.subFunc = function(){
        $scope.result = $scope.value1  - $scope.value2
    }

    $scope.math.mulFunc = function(){
        $scope.result = $scope.value1  * $scope.value2
    }
})
