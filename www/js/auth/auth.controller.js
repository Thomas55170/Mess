var auth = angular.module("auth");

auth.controller('LoginCtrl', function ($scope) {

    auth.$signInWidthPopup("google")
        .then(function(firebaseUser){

    }).catch(function(error){
        console.log("Authetication failed :", error);
    });

});
