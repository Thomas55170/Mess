var chat = angular.module("chat");

chat.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("chatList", {
            url: "/chatList",
            templateUrl : "template/ChatList.html",
            controller: 'ChatListCtrl',
            resolve: {
                // controller will not be loaded until $waitForSignIn resolves
                // Auth refers to our $firebaseAuth wrapper in the factory below
                "currentAuth": ["Auth", function(Auth) {
                    // $waitForSignIn returns a promise so the resolve waits for it to complete
                    return Auth.$waitForSignIn();
                }]
            }
        })
        .state("chatMessage", {
            url: "/chatMessage/:id",
            templateUrl : "template/ChatMessage.html",
            controller: 'ChatMessageCtrl',
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