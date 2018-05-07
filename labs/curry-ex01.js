/**
 *  Currying: Adding two number
 * @param {x} 
 */
function add(x) {
    return function (y) {
        return x + y;
    };
}
// Example 1
console.log("Output=" + add(2)(3)); // 5
// Example 2
let addNumber = add;
console.log("Output=" + addNumber(2)(3)); //5
// Example 3
let addTwoNumber = add(2);
console.log("Output="+addTwoNumber(3)); //5