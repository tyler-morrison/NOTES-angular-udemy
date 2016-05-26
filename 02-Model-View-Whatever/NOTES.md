The Problem(s) AngularJS is Trying to Solve
======

We want to make websites feel more fluid and natural; however, we’re also trying to lower the amount of work it takes to create these sites. As web applications become more and more complex, things can get very hairy if you’re working with older technologies like jQuery — a lot of time is spent updating the DOM. AngularJS looks to solve this issue.

Model, View, Whatever
======

With the new paradigm, we have data on one side and HTML on the other. We need to connect these two things to produce a successful application. The idea for achieving this has actually been around for a long time - Model, View, Controller.

AngularJS actually has a different mindset from this — **Model, View, Whatever (MVW)**.
* Model = Our data (a variable, etc.)
* View = Whatever the user sees / interacts with (HTML for web sites)
* Whatever = Something the *binds* the Model to the View so that the two can interact simultaneously (controllers, view models, whatever...)

HTML Aside: Custom Attributes
======

When writing HTML, the browser has built-in ways to render many different attributes out-of-the-box. For example...
```s
<!-- The ‘style’ attribute will automatically apply CSS inline -->
<h1 style="font-size:25em;">Hello World</h1>
<!-- Wow that’s a big header! -->

<!-- However, by default, browsers will not render custom attributes -->
<h1 reply="Hello Back">Hello World</h1>
<!-- This will not change the look of ‘h1’, but it will remain in DOM memory -->
```

HTML5 actually takes this one step further and requires a ‘data-’ syntax before custom attributes to be 100% valid.

AngularJS does not use *‘data-’*, instead they use *‘ng-’* to declare custom attributes that are related to its scripts. If you wanted to be really sticky about your HTML5 syntax, you could use *‘data-ng-’*; however, this is not a requirement.

Modules, Apps, and controllers
======

When you write AngularJS, you have one, and only one, variable that is attached to the Global Namepace — your main application **module**.

To connect your Angular module to the view, we use **a custom attribute — ‘ng-app="myApp"’ — to connect our module to the HTML document**, typically at the root HTML element. This tells Angular that everything within that area of the DOM should be connected to your module’s variable that was connected to the Global Namespace.

Within the Angular module, our first step is usually to declare a controller. **Controllers are used to connect the view with the model**. A view can actually be defined *within* your application — like a sub-view of sorts — using the **custom attribute ‘ng-controller="mainController"’**. When AngularJS sees this syntax inside the DOM it links the
