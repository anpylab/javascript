/**
 * without Arrow Function.
 */
let x = function () {
    this.val = 1;
    setTimeout(function () {
        console.log(this.val++);
    }, 1);
};
x(); // NaN

let y = function () {
    this.val = 1;
    setTimeout(() => {
        console.log(this.val++);
    }, 1);
};
y(); //1

function f() {
    var x = 10;
    (function f1() {
        console.log(x);
    })();
}
f(); // 10
