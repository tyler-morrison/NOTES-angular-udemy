# How Does AngularJS Do Dependency Injection?

Behind the scenes, AngularJS parses the parameters of each function it receives using `angular.injector().annotate()`. This native function will then return each parameter’s name as an item within an array.

Whenever Angular recognizes a name — like the ‘$scope’ service — it will then create the corresponding object and replace the array item. Not only does this save time, but it also makes our applications easier to test.
