/**
 * Find second largest number
 * @param {*} a 
 */
function secondLargestNumber(a) {
    let l = 0,
        s = 0;
    if (a != null && a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            if (l > a[i]) {
                s = l;
                l = a[i];
            }
        }
    } else {
        console.log("array is null or empty.");
    }
    return s;
}
console.log(secondLargestNumber([-2, 4, 5, 7, 3, 8, 1]));