/**
 * Flat an Array.
 */
let arr = [1, 2, [3, 4]];

let flatArr = arr.reduce(function (accumulator, value) {
    return accumulator.concat(value);
}, []);
console.log(flatArr); // [ 1, 2, 3, 4 ]

// Flat an Array Multi array object.
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flatArray(ar) {
    return ar.reduce(function (accumulator, value) {
        return Array.isArray(value) ? accumulator.concat(flatArray(value)) : accumulator.concat(value);
    }, []);
};
console.log(flatArray(arr1)); // [ 1, 2, 3, 1, 2, 3, 4, 2, 3, 4 ]