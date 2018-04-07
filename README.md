<h1>javascript Concepts</h1>
  <ol>
  <li>
    Explain Javascript programing paradim.
    <p>
      Javascript is a multi paradim programing language, it supports <strong>event-driven, functional, imperative</strong> (including object-oriented and prototype-based) programming styles.
    </p>
  </li>
  <li>
    what is function in javascript?
    <p>
   Function is a subprogram and desinged to perform particular operation.<br>
   Function always return value, In Javascript by default reutrn undefined in case the function is not any value.<br>
   Function will excute within the scope.<br>
   functions are Object in Javascript.
    </p>
  </li>
  <li>
    Understanding Declarative and Imperative programing.
    <p>
      <strong>Declarative:</strong> specify what to do, not how to do it<br>
	    E.g.: HTML describes what should appear on a web page, not how it should be drawn on the screen<br>
      <strong>Imperative:</strong> specify both what and how
	    int x; - What (declarative)
	    x=x+1; - How
    </p>
  </li>
  <li>
    what is High order function or Callback function?
    <p>
     A callback function, also known as a higher-order function, is a function that is passed to another function.It executes inside another function.
    </p>
  </li>
  <li>
    what is colsure?
    <p> A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.</p>
  </li>
  <li>
    Javascript Prototype  
   <p> All JavaScript objects inherit the properties and methods from their prototype. Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.</p>
  </li>
  <li> 
    what is First-class functions
    <p>
     In Javascript functions are first-class objects, because they can have properties and methods just like any other object.
     When functions in that language are treated like any other variable
    </p>
  </li>
  <li>
    Currying in javascript.
    <p>
      It is a technique for converting function calls with multiple arguments into chains of function calls with a single argument for each call, but JavaScript supports multiple arguments in a single function call. 
    </p>
    <li>
       Lexical scope or static scope
      <p>
        Lexical Scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as Static Scope.
      </p>
    </li>
  <li>
     What is the difference between classical inheritance and prototypal inheritance?
    <p>
      <strong>Class Inheritance:</strong> instances inherit from classes<br>
      <strong>Prototypal Inheritance:</strong> instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()
    </p>
  </li>
 <li> 
  Diffrence between __proto__ and  prototype
  <p>
   <strong> __proto__:</strong> It is property of Object.<br>
   <strong>prototype:</strong> Property of function.</br>
    To make it a little bit clear in addition to above great answers:<br>
function Person(name){<br>
    this.name = name<br>
 }; <br>
var eve = new Person("Eve");<br>
eve.__proto__ == Person.prototype //true<br>
eve.prototype  //undefined<br>
Instances have __proto__, classes have prototype.<br><br>

function Foo() {}<br>
var b = new Foo();<br>
b.__proto__ === Foo.prototype // true<br>
Foo.__proto__ === Function.prototype // true<br>
Function.prototype.__proto__ === Object.prototype // true<br>
  </p>
  </li>
  <li>
    What is Hoisting?
    <p>
      Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted
    </p>
  </li>
  <li>
     What are the diffrent types of error in javascript?
    <p>
      <strong>Load time errors:</strong> Errors comes up when page loads like improper syntax error.<br>
      <strong>Run time errors:</strong> Errors comes out that misuse of command inside the HTML command.
    </p>
  </li>
  <li>
    Throttling
    <p>Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds.</p>
  </li>
  <li>
    Debounce
    <p>Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 100 milliseconds have passed without it being called.</p>
  </li>
  </ol>
    <h1> ES6 Features</h1>
