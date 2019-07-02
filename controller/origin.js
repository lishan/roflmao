angular.module("reflmao").controller("originController", function($scope, $location, data, md5){
    $scope.goToAnalysis = function(){
        $location.path('/force')
    };
    $scope.nodes = data.nodes();
    $scope.submit = function(){
        for(var i in $scope.nodes){
            $scope.nodes[i].name = md5.createHash($scope.nodes[i].name);
        }
    }
})