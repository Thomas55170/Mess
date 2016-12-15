var chat = angular.module("auth");

auth.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("chatList", {
            url: "/chatList",
            //templateUrl : "template/main.html",
            controller: 'ChatListCtrl',
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