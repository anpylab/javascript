/**
 * Simple Closures
 * @param {*} params 
 */
function counter(params) {
    let count = 0;
    return function () {
        count = count + 1;
        return count;
    }
}

let c = counter();

console.log(c()); //1
console.log(c()); //2