var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
   $http.get("http://www.appsme.com/InterviewChallenge")
   .then(function (response) {$scope.names = response.data.gallery;});
});
