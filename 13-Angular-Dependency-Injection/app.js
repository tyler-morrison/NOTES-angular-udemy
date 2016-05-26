var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function($scope, lastName, height, age, occupation) {
  return 'Jane Doe';
}

// You will rarely use this syntax, but it’s interesting to see how Angular handles dependency injection behind the scenes.
console.log(angular.injector().annotate(searchPeople));
// This will parse the parameters of `searchPeople` and returns each as an item within an array.
