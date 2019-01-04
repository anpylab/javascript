/**
 * 
 * @param {*} arr 
 * @param {*} sum 
 */
function twoSum(arr, sum) {
    for (let index in arr) {
        let balance = sum - arr[index];
        if (arr.indexOf(balance) != -1) {
            return [arr[index], balance];
            
        }
    }
    return;
}

console.log(twoSum([2, 7, 11, 15], 9));