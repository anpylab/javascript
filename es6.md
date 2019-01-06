# ES6 Features
- What is arrow function?
  - A shorter syntax then typical functions
  - Arrow functions should NOT be used:
  - When we want function hoisting
  - When we want to use this/arguments in a function
  - When we want to use named function
  - When we want to use function as a constructor
  - When we want to add function as a property in object literal and use object in it
- Constants
   ```
    const PI = 3.14;
   ```
- Currying
  ```
   const f = a => b => a + b;
   (2)(3) // output 5
  ```
- Default Parameters
  ```
    function sum(x=10, y=10) {
        return x+y;
    }
    console.log(sum()); // 20
    console.log(sum(5)); // 15
  ```
- Template Literals
  ```
    let str = "World.!";
    let tempStr = `Hello ${str}`;
    console.log(tempStr); // Hello World.!
  ```
- Arrow Functions
  ```
   let sum=(a,b)=>a+b;
   console.log(sum(2,2)); // 4
  ```
- Destructuring Assignment
  ```
  let arr=[1,2,3];
  let [a,b]=arr;
  console.log(a,b); //1,2
  ```
- Modules
  ```
    // sum.js
    export function sum(x, y) {
        return x + y;
    }
   //module.js
    import m from "../sum";
    m.sum(2,3);
  ```