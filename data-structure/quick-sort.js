/**
 * 
 * @param {*} nums 
 * @param {*} len 
 */
function quickSort(a, left, right) {
    let i = left;
    let j = right;
    let pivot = Math.floor(a.length / 2);
    while (a[i] < a[pivot]) {
        i++;
    }
    while (a[pivot] > a[j]) {
        j--;
    }
}

let arr = [3, 1, 2, 5, 8, 7, 9, 4, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);