/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
       return gcd(a, a % b);
    }
}
console.log(gcd(8, 2));// 8