var auth = angular.module("auth");


//
auth.factory("Auth",["$firebaseAuth",
    function($firebaseAuth){
        return $firebaseAuth();
    }
]);

auth.service()