angular.module("reflmao").controller('forceController', function($scope, $echarts){
    console.log(echarts);
    $scope.DISTRIBUTION_ID = $echarts.generateInstanceIdentity();
    $scope.distribution = {
        xAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'联盟广告',
            type:'bar',
            data:[220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };
 })