/**
 * Fib
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