# Javascript Aside: Dependency Injection

**Dependency Injection** = Giving a function an object. Rather than creating an object *inside* a function, you pass it to the function. Consider the following code...

```
var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson() {
  var john = new Person('John', 'Doe'); // This is a Dependency
  console.log(john);
}

logPerson();
```

In the code above, we see that ‘john’ is a dependency of ‘logPerson’. This is bad because if we want to change ‘john’, we have to do so from *inside* the function. If you do this, your code can become complicated and brittle.

We would rather use **dependency injection** like this...

```
var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson(person) {
  console.log(person);
}

// Here the new object is created OUTSIDE of `logPerson()`
var john = new Person('John', 'Doe');
logPerson(john);
```

Now you can serve up the ‘person’ object however you please — via function constructor, database, anything. AngularJS uses dependency injection to enforce a stronger, more stable, application structure.
