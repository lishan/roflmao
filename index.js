(function(){
var app = angular.module('reflmao', ['ngRoute', 'echarts-ng']);

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

app.config(function($echartsProvider) {
  var newGlobalOption = {
                          theme: 'macarons',
                          driftPalette: true,
                          title: {
                            left: 'center',
                            top: 'top',
                            padding: [20, 10, 10, 10]
                          },
                          backgroundColor: 'rgba(255, 255, 255, .5)',
                          legend: {
                            left: 'center',
                            top: 'top',
                            padding: [20, 10, 10, 10]
                          },
                          tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                              type: 'shadow'
                            }
                          }
                        }
  $echartsProvider.setGlobalOption(newGlobalOption)
});

    }]); })();