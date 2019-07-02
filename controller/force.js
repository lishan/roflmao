angular.module("reflmao").controller('forceController', function($scope, $document, $location, data, md5){
    var myChart = echarts.init($document[0].getElementById('main'));
    option = {
        title : {
            x:'right',
            y:'bottom'
        },
        tooltip : {
            trigger: 'item',
            formatter: '{a} : {b}'
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                magicType: {show: true, type: ['force', 'chord']},
                saveAsImage : {show: true}
            }
        },
        legend: {
            x: 'left',
            data:['family','friend']
        },
        series : [
            {
                type:'graph',
                layout:'force',
                name : "relationship",
                ribbonType: false,
                symbolSize: function(value, params){
                    return 50;
                },
                force: {
                    edgeLength: 300,
                    repulsion: 50,
                    gravity: 0.01
                },
                categories : [
                    {
                        name: 'people'
                    },
                    {
                        name: 'family'
                    },
                    {
                        name:'friend'
                    }
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        },
                        nodeStyle : {
                            brushType : 'both',
                            borderColor : 'rgba(255,215,0,0.4)',
                            borderWidth : 1
                        },
                        linkStyle: {
                            type: 'curve'
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                        },
                        nodeStyle : {
                        },
                        linkStyle : {}
                    }
                },
                useWorker: false,
                minRadius : 15,
                maxRadius : 25,
                gravity: 1.1,
                scaling: 1.1,
                roam: 'move',
                nodes : data.nodes(),
                links : data.links()
            }
        ]
    };
    myChart.setOption(option);

    $scope.back = function(){
        $location.path('/')
    };
    $scope.submit = function(){
        for(var i in option.series[0].nodes){
            option.series[0].nodes[i].name = md5.createHash(option.series[0].nodes[i].name);
        }
        for(var i in option.series[0].links){
            option.series[0].links[i].source = md5.createHash(option.series[0].links[i].source);
            option.series[0].links[i].target = md5.createHash(option.series[0].links[i].target);
        }
        myChart.setOption(option);
    }
 })