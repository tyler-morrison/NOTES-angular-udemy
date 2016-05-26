// Be sure to add dependencies here...
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
  // Log Examples
  //
  // $log.log("Hello from Log Service!");
  // $log.info("This is some neat information.");
  // $log.warn("Warning");
  // $log.debug("Some debug information");
  // $log.error("This was an error!");

  // Filter Examples
  //
  // $scope.name = 'Tyler';
  // $scope.formattedname = $filter('uppercase')($scope.name);
  //
  // $log.info($scope.name);
  // $log.info($scope.formattedname);


});
