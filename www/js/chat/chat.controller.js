var chat = angular.module("chat");


chat.controller('ChatListCtrl', function ($scope, $state, $firebaseArray, chatLists) {

    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.conversations = chatLists;

    // if the messages are empty, add something for fun!
    $scope.conversations.$loaded(function() {
        if ($scope.conversations.length === 0) {
            $scope.conversations.$add({
                name: "Test",
                nameCreator: "Me",
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                messages: []
            });
        }
    });


});

chat.controller('ChatMessageCtrl', function($scope,$state,$stateParams,$firebaseArray, chatMessages){

    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = chatMessages.List($stateParams.id);

    $scope.addMessage = function() {
        // $add on a synchronized array is like Array.push() except it saves to the database!
        console.log('user',$scope.user);
        console.log('message',$scope.message);
        $scope.messages.$add({
            from: $scope.user,
            content: $scope.message,
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {

        if ($scope.messages.length === 0) {
            $scope.messages.$add({
                from: "Uri",
                content: "Hello!",
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }
    });

});

chat.controller('AddChatModalCtrl', function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/ModalAdd.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
   /* $scope.openModal = function() {
        $scope.modal.show();
    };*/

    /*$scope.createContact = function(u) {
        $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
        $scope.modal.hide();
    };*/

    /*$ionicModal.fromTemplateUrl('modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) { $scope.modal = modal; });*/


});