/**
 * Custom filter, map and reduce 
 */
// Custom myFilter()
let a = [5, 4, 3, 2, 1, 6];
Array.prototype.myFilter = function (cb, context) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb.call(context, this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;

};
let b = a.myFilter(function (v) {
    return v > 3;
});
console.log("My Filter result=" + b);
// Custom myMap() implementation
Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push((cb(this[i], i, this)));
    }
    return newArr;
};

let n = a.myMap(function (v) {
    return v * 2;
});

console.log("My Map Result=" + n);

// Custom myReduce() implementation
Array.prototype.myReduce = function (cb, initValue) {
    let accumulator = (initValue === undefined) ? undefined : initValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator != undefined) {
            accumulator = cb.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

let total = a.myReduce(function (a, b) {
    return a + b;
}, 0);
console.log(total);