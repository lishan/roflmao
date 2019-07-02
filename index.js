(function(){
var app = angular.module('reflmao', ['ngRoute', 'angular-md5']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/origin.html',
                controller : 'originController'
            })
            .when('/force',{
                templateUrl: 'views/force.html',
                controller : 'forceController'
            })
            .otherwise({
                redirectTo:  '/'
            });
    }]);
})();