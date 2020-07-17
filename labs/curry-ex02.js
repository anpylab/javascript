// example 1
function curry(a) {
    return function (b) {
        if (b) {
            return curry(a + b);
        } else {
            return a;
        }

    }
}
console.log(curry(1)(2)(3)())

// example 2
let sum = a => b => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)())
