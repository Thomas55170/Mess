var auth = angular.module("auth");

auth.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl : "template/main.html",
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$waitForSignIn();
                }]
            }
            //controller: 'LoginCtrl'
        })
        .state("login", {
            url: "/login",
            //templateUrl : "template/main.html",
            controller: 'LoginCtrl',
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$waitForSignIn();
                }]
            }
        });
});