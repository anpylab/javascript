/**
 * insertion sort
 * @param {insertion } a 
 */
function sort(a) {
    let len = a.length;
    let temp = 0;
    for (let i = 1; i < len; i++) {
        temp = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > temp) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = temp;
    }
    return a;
}
let ar = [3, 4, 6, 2, 8, 1];
console.log(sort(ar));