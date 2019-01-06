# Contents
  - [Event Loop](/eventloop.md)
  - [ES6 Features](/es6.md)
  - [Coding Exercises](/coding-exercises.md)
# javascript Concepts
1. Javascript Dataype
   Javascript are six primitive data types
    - Primitive data types
        - Number (Numbers are with decimal an without decimal)
        - String
        - Boolean
    - Object Data type
         - Object
         - Array
    - Spcial Data type
        - Null
        - Undefined
        - Symbol (ES6)
2. Explain Javascript programing paradigm.
  - Javascript is a multi paradigm programing language, it supports  **event-driven, functional, imperative**
   (including object-oriented and prototype-based) programming styles.
3. what is function in javascript?
   - Function always return value, In Javascript by default return **undefined** in case the function is not any value.
   - **Function** is a subprogram and designed to perform particular operation.
   - Function is a subprogram and designed to perform particular operation
   - Function will execute within the scope.
   functions are Object in Javascript.
4.  Understanding Declarative and Imperative programing.
  - **Declarative:** specify what to do, not how to do it
  -  E.g: HTML describes what should appear on a web page, not how it should be drawn on the screen
  - **Imperative:** specify both what and how\
	    int x; - What (declarative)\
	    x=x+1; - How
5. what is High order function or Callback function?\
   A callback function, also known as a higher-order function, is a function that is passed to another function. It executes inside another function.
6. what is closure ?\
   A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

   [More details...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
7. Javascript Prototype \
   All JavaScript objects inherit the properties and methods from their prototype. Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
8. what is **First-class** functions\
   In Javascript functions are first-class objects, because they can have properties and methods just like any other object.\
   When functions in that language are treated like any other variable.
9. [Currying in javascript.](labs/curry-ex01.js)\
   It is a technique for converting function calls with multiple arguments into chains of function calls with a single argument for each call, but JavaScript supports multiple arguments in a single function call.
   
10. Lexical scope or static scope\
    Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as Static Scope.
 11. What is the difference between classical inheritance and prototypal inheritance?\
     **Class Inheritance:** instances inherit from classes.
     **Prototypal Inheritance:** instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()
12. Diffrence between __proto__ and  prototype
    - **__proto__:** It is property of Object
    - **prototype:** Property of function
      To make it a little bit clear in addition to above
      ```To make it a little bit clear in addition to above great answers:
      function Person(name){
        this.name = name;
      }; 
      var eve = new Person("Eve");
      eve.__proto__ == Person.prototype //true
      eve.prototype //undefined
      Instances have __proto__, classes have prototype.

      function Foo() {}
      var b = new Foo();
      b.proto === Foo.prototype // true
      Foo.proto === Function.prototype // true
      Function.prototype.proto === Object.prototype // true
      ```
13. What is Hoisting?\
    Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted
14. What are the different types of error in javascript?
    - **Load time errors:** Errors comes up when page loads like improper syntax error
    - **Run time errors:** Errors comes out that misuse of command inside the HTML command.
15. Throttling
    Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds.
16. [Debounce](labs/debounce.js)
    Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in execute this function only if 100 milliseconds have passed without it being called.
17. call(), apply and bind() methods
    - **Call:** A function with argument provide individually. If you know the arguments to be passed or there are no argument to pass you can use call.function.call(thisArg, arg1, arg2, ...)
    - **Apply:** Call a function with argument provided as an array. You can use apply if you don't know how many argument are going to pass to the function.apply(thisArg, [argsArray]);
    - **Bind:** Use .bind() when you want that function to later be called with a certain context, useful in events.
18. Promise\
    promises in JavaScript give us the ability to write asynchronous code in a parallel manner to synchronous code.\
    A promise represents the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materialize. it has three state **Pending, resolve  and reject**
19. IIF - immediately invoked function expression
 
20. [Garbage collection](https://javascript.info/garbage-collection)