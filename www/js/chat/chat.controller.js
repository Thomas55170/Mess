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
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }
    });

});

chat.controller('ChartMessageCtrl', function($scope,$state,$firebaseArray, chatMessages){

    /*var messagesRef = firebase.database().ref().child("messages");
     // download the data from a Firebase reference into a (pseudo read-only) array
     // all server changes are applied in realtime
     $scope.messages = $firebaseArray(messagesRef);
     // create a query for the most recent 25 messages on the server
     var query = messagesRef.orderByChild("timestamp").limitToLast(25);
     // the $firebaseArray service properly handles database queries as well
     $scope.filteredMessages = $firebaseArray(query);*/


    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = chatMessages;

    $scope.addMessage = function() {
        // $add on a synchronized array is like Array.push() except it saves to the database!
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