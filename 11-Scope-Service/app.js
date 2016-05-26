var myApp = angular.module('myApp', []);

// Here we're *injecting* the ‘$scope’ object into the controller...
myApp.controller('mainController', function($scope) {
  // Later, you can then modify the object from within...
  $scope.name = 'John Doe';
  $scope.occupation = 'Developer'

  $scope.getName = function() {
    console.log(this.name);
  }

  $scope.getName();

  console.log($scope);
});
