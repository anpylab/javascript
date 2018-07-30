# ES6 Features
- What is arrow function?
  - A shorter syntax then typical functions
  - Arrow functions should NOT be used:
  - When we want function hoisting
  - When we want to use this/arguments in a function
  - When we want to use named function
  - When we want to use function as a constructor
  - When we want to add function as a property in object literal and use object in it
- Currying
  ```
   const f = a => b => a + b;
   (2)(3) // output 5
  ```