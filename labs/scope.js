/**
 * scope with let example
 */
let a = 5;
let b = 'abc';

function outerFunction() {
    let a = 10;
    b = 'xyz';

    function innerFunction() {
        a = 20;
        let b = 'jkl';
    }
    innerFunction();
    console.log(a); //20
    console.log(b); //xyz
}
outerFunction();
console.log(a); // 5
console.log(b); // xyz
//20, xyz, 5, xyz
console.log("----------------------");
var obj = {
    innerObj: {
        x: 9
    }
};

var z = obj.innerObj;

z.x = 25;

console.log(obj.innerObj.x); // 25

var obj = {
    arr: [{
        x: 17
    }]
};

var z = obj.arr;

z = [{
    x: 25
}];

console.log(obj.arr[0].x); // 17

var obj = {};
var arr = [];
obj.arr = arr;
arr.push(9);
obj.arr[0] = 17;

console.log(obj.arr === [17]); // false
console.log("-----------------------");

function myFun(item1, item2) {
    if (item2 === undefined) {
        item2 = [];
    }
    item2[0] = item1;
    return item2;
}
var w = {};
var x = [w];
var y = myFun(w);
var z = myFun(w, x);
console.log(x === y);