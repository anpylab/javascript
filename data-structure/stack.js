/**
 * Stack
 */
function Stack() {
    let arr = [];
    _pushEle = function (value) {
        arr.push(value);
    };
    _popEle = function (value) {
        arr.pop();
    };
    _print = function (value) {
        console.dir(arr);
    };
    return {
        push: _pushEle,
        pop: _popEle,
        print: _print
    };
}
let s = Stack();
s.push(1);
s.print();
s.pop();