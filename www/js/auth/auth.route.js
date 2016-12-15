var auth = angular.module("auth");

auth.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("home", {
            url: "/login",
            //templateUrl : "template/main.html",
            controller: 'LoginCtrl'
        });
});