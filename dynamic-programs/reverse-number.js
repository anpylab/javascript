/**
 * 
 * @param {*} n 
 */
function reverse(n) {
    let r = 0;
    while (n != 0) {
        r = (r * 10) + (n % 10);
        n = n / 10;
        n = parseInt(n);

    }
    return r;
}
console.log(reverse(123)); //
console.log(reverse(-112)); //-211