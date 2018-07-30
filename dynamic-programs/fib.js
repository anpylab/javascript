/**
 * Soultion 1
 * @param {*} n 
 */
function fib(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;
    let i = 2;
    while (i < n) {
        f[i] = f[i - 1] + f[i - 2];
        i++;
    }
    return f;
}
console.log(fib(10));
//Solution 2
function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}
console.log("--------Solution 2----------");
console.log(fibonacci(5));