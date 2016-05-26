# Dependency Injection and Minification

You can’t just minify Angular code with any standard minifier. Recall that Angular depends on those parameter strings to perform dependency injection. To combat this, the Angular team came up with an alternative method of dependency injection, which should become the standard.

```
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
  $log.info($scope);
}]);

// Minifies to...
myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
```

As you see above, **the last element of the array needs to be the function that defines the controller**. The items that come before should be whatever parameters you need to be injected into the controller — *pay careful attention that they are strings*.

**IMPORTANT: When using this method, the order of dependencies DO matter!**
