var app = angular.module('trialApp', []);

app.controller('DemoController', function($scope) {
    $scope.greeting = "Hello, AngularJS!";

    $scope.resetGreeting= function(){
        $scope.greeting= "Hello, AngularJS!";
    };
});
