var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {

});

var searchPeople = function(firstName, lastName, height, age, occupation) {
  return 'Jane Doe';
}

console.log(searchPeople(1, 2, 3, 4, 5)); // Returns ‘Jane Doe’
console.log(searchPeople); // Returns string of the function object.

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString); // Also returns a string of the function
