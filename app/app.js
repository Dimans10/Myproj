let routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
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