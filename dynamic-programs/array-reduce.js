/**
 * 
 * @param {*} arr 
 */
function arrayReduce(arr) {
    return arr.reduce((a, b) => {
        console.log(a);
        return a > b ? a.concat(b) : a.concat(b);
    }, []);
}
let a = [1, [4, 6], 8, 10, 5, 3];
console.log(arrayReduce(a));