angular.module("reflmao").service("data", function(){
    this.nodes = function(){
        return [
                                   {category:0, name: 'Steve Jobs', value : 10, label: 'Steve Jobs\n（main）'},
                                   {category:1, name: 'Lisa-Steve Jobs',value : 2},
                                   {category:1, name: 'Paul-Steve Jobs',value : 3},
                                   {category:1, name: 'Clara-Steve Jobs',value : 3},
                                   {category:1, name: 'Lauren-Powell',value : 7},
                                   {category:2, name: 'Steve-Wozny Ike',value : 5},
                                   {category:2, name: 'Obama',value : 8},
                                   {category:2, name: 'Bill-Gates',value : 9},
                                   {category:2, name: 'Jonathan-IFF',value : 4},
                                   {category:2, name: 'Tim-Cook',value : 4},
                                   {category:2, name: 'Loong-Wayne',value : 1}
                               ];
    }
    this.links = function(){
        return [
                                   {source : 'Lisa-Steve Jobs', target : 'Steve Jobs', weight : 1, name: 'darter'},
                                   {source : 'Paul-Steve Jobs', target : 'Steve Jobs', weight : 2, name: 'father'},
                                   {source : 'Clara-Steve Jobs', target : 'Steve Jobs', weight : 1, name: 'mother'},
                                   {source : 'Lauren-Powell', target : 'Steve Jobs', weight : 2},
                                   {source : 'Steve-Wozny Ike', target : 'Steve Jobs', weight : 3, name: 'parter'},
                                   {source : 'Obama', target : 'Steve Jobs', weight : 1},
                                   {source : 'Bill-Gates', target : 'Steve Jobs', weight : 6},
                                   {source : 'Jonathan-IFF', target : 'Steve Jobs', weight : 1},
                                   {source : 'Tim-Cook', target : 'Steve Jobs', weight : 1},
                                   {source : 'Loong-Wayne', target : 'Steve Jobs', weight : 1},
                                   {source : 'Clara-Steve Jobs', target : 'Paul-Steve Jobs', weight : 1},
                                   {source : 'Obama', target : 'Paul-Steve Jobs', weight : 1},
                                   {source : 'Obama', target : 'Clara-Steve Jobs', weight : 1},
                                   {source : 'Obama', target : 'Lauren-Powell', weight : 1},
                                   {source : 'Obama', target : 'Steve-Wozny Ike', weight : 1},
                                   {source : 'Bill-Gates', target : 'Obama', weight : 6},
                                   {source : 'Bill-Gates', target : 'Clara-Steve Jobs', weight : 1},
                                   {source : 'Tim-Cook', target : 'Obama', weight : 1}
                               ]
    }
});