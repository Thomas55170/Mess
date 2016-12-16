var chat = angular.module("chat");

chat.factory("chatMessages", ["$firebaseArray",
    function ($firebaseArray) {
        return {
            List: function (id) {
                console.log("ID",id);
                var ref = firebase.database().ref().child(id).child("messages");

                return $firebaseArray(ref)
            }
        }
    }

]);

chat.factory("chatMessagesLoad", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database where we will store our data
        var ref = firebase.database().ref();

        return $firebaseArray(ref);
    }
]);

chat.factory("chatLists", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database where we will store our data
        var ref = firebase.database().ref();

        return $firebaseArray(ref);
    }
]);


chat.factory('chatManager', function ($firebaseObject, $firebaseArray) {
   var chatManager = function (id){
        this.id = id;
   };

   chatManager.prototype.getMembers = function () {
     return $firebaseObject(firebase.database().ref().child('members/' + this.id));
   };

    // A faire
    chatManager.prototype.getChat = function () {
        //var ref = firebase.database().ref().child(number).child("messages");

    };

    // A faire
    chatManager.prototype.getMessages = function(number){
        var ref = firebase.database().ref().child(number).child("messages");
        return $firebaseArray(ref)
    };

    /*chatManager.prototype.addMemberIfNotExists = function(currentUser){
        var membres = this.getMembres();
        if(!angular.isDefined(members[currentUser.uid])){
            members[currentUser.uid] = {
                uid: currentUser.uid,
                writing: false,
                username: currentUser.displayName
            };

            members.$save();
        }
    };*/

    return chatManager;

});