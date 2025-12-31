var app = angular.module('trialApp', []);

app.controller('DemoController', function($scope) {
    $scope.greeting = "Hello, AngularJS!";

    $scope.items = [
        { timestamp: "2025-12-31 10:00", cpu: 20, strikeRate: 0.95 },
        { timestamp: "2025-12-31 10:05", cpu: 35, strikeRate: 0.87 },
        { timestamp: "2025-12-31 10:10", cpu: 50, strikeRate: 0.92 }
    ];

    $scope.newItem = {
        timestamp: "",
        cpu: null,
        strikeRate: null
    };

    $scope.addItem = function () {
        if ($scope.newItem.timestamp && $scope.newItem.cpu !== null && $scope.newItem.strikeRate !== null) {
            // Push a **copy** of the object
            $scope.items.push({
                timestamp: $scope.newItem.timestamp,
                cpu: $scope.newItem.cpu,
                strikeRate: $scope.newItem.strikeRate
            });
            // Reset input fields
            $scope.newItem = { timestamp: "", cpu: null, strikeRate: null };
        }
    };
});

