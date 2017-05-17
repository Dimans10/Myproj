angApp.factory('dataService', function($http){
    var factory = {};
    factory.getfunc = function (){
        return  $http({method: 'GET', url: 'http://localhost:8000/notes/Lorem ipsum'})
    }
    return factory;
});

angApp.directive('getLorem', function(dataService) {
    return {
        restrict: 'A', 
        templateUrl: 'pages/get-lorem.html',
        link: function(scope, element, attrs) {
            dataService.getfunc().
            then(function (success){
                 scope.loremRepeat = success.data.text;
                 })
            }
    };
})