/**
 * High order function example
 * @param {*} hf 
 */
function myFunction(hf) {
    console.log("My function call.");
    hf();
}
/**
 * 
 */
myFunction(() => {
    console.log("Higher Order function.");
});
/**
 * Higher order function example 2
 */
let strArr = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapFn(arr, fn) {
    console.log("Higher Order Function mapFn.");
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(fn(arr[i]));
    }
    return a;
}
let newAr = mapFn(strArr, function (item) {
    return item.length;
});
console.log(newAr);