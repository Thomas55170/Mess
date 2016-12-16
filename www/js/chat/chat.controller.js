var chat = angular.module("chat");

// LISTE DES CONVERSATIONS
chat.controller('ChatListCtrl', function ($scope, $state, $firebaseArray, chatLists,$ionicModal, Auth) {

    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.conversations = chatLists;

    // if the messages are empty, add something for fun!
    $scope.conversations.$loaded(function() {
        if ($scope.conversations.length === 0) {
            $scope.conversations.$add({
                name: "Test",
                nameCreator: Auth.$getAuth().displayName,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                messages: []
            });
        }
    });

    $ionicModal.fromTemplateUrl('template/ModalAdd.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
});

// MODAL
chat.controller('ConversationCreationCtrl', function($scope, $firebaseArray, chatLists, Auth){
    $scope.conversations = chatLists;


    $scope.addConversation = function(){

        $scope.conversations.$add({
            name: $scope.name,
            nameCreator: Auth.$getAuth().displayName,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    };


});

// CHATS D'UNE CONVERSATION
chat.controller('ChatMessageCtrl', function($scope,$state,$stateParams,$firebaseArray, chatMessages, Auth){

    //$scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = chatMessages.List($stateParams.id);

    $scope.addMessage = function() {
        // $add on a synchronized array is like Array.push() except it saves to the database!
        console.log('user',$scope.user);
        console.log('message',$scope.message);
        $scope.messages.$add({
            from: Auth.$getAuth().displayName,
            content: $scope.message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {

        if ($scope.messages.length === 0) {
            $scope.messages.$add({
                from: Auth.$getAuth().displayName,
                content: "Hello!",
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }
    });

});
/*
chat.controller('ChatManagerCtrl', function($scope, chatManager, $stateParams, Auth){
   var chatManager = new chatManager($stateParams.id);
   var currentUser = Auth.$getAuth();

   chatManager.addMemberIfNotExists(currentUser);
   $scope.chat = chatManager.getChat();
   //$scope.members = chatManager.getMembers();

   $scope.messages = chatManager.getMessages();

   //Gestion du formulaire d'ajout de message
    // A Faire


});*/