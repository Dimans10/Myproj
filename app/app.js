/*
let app = angular.module('angularjs-starter', ["ngSanitize"]);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.content = "<b>this is bold content</b><p>with a <u>paragraph</u></p>";
});*/

var questApp = angular.module('angApp', ['ui.router']);
questApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('wew', {
            url: '/wew',
            templateUrl: 'pages/wew.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html'
        });
    $urlRouterProvider.otherwise('/home');
});