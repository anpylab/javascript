/**
# Problem
Implement a function called "map", that takes in a function and then an array. The map function will transform the array in the argument into a new array with its member being applied by the function passed as the second argument. If possible, function should be able to be partially applied as well, and preferably this should be implemented without any external libraries.

map: ((a -> b), [a]) -> [b] // acceptable

or

map: (a -> b) -> [a] -> [b] // better

Example:
```
var myArray = [1,2,3,4,5];
var timesFive = function(elem){
  return elem * 5;
}

map(timesFive, myArray) === [5, 10, 15, 20, 25] // acceptable

var applyTimesFive = map(timesFive);
applyTimesFive(myArray) === [5, 10, 15, 20, 25] // better
```
*/
var myArray = [1, 2, 3, 4, 5];
var timesFive = function (elem) {
    return elem * 5;
};
// Option 1
function map(timesFive, myArray) {
    var newArr = [];
    for (value in myArray) {
        newArr.push(timesFive(myArray[value]));
    }
    return newArr;
}
console.log(map(timesFive, myArray));

// Option 2
function map(timesFive) {
    return function (myArray) {
        var arr = [];
        for (i in myArray) {
            arr.push(timesFive(myArray[i]));
        }
        return arr;
    }

}
var applyTimesFive = map(timesFive);
console.log(applyTimesFive(myArray));