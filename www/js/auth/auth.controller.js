var auth = angular.module("auth");

auth.controller('LoginCtrl', function ($scope, Auth, $state) {

   $scope.connectGoogle = function(){
       Auth.$signInWithPopup("google")
           .then(function(firebaseUser){

               $state.go('chatList');

           }).catch(function(error){
           console.log("Authentication failed :", error);
       });
   }


});