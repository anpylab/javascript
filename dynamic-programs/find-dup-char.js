/**
 * Find duplicate
 * @param {*} str 
 */
function findDup(str) {
    let a = [];
    for (let i = 0; i < str.length; i++) {
        if (a[str[i]]) {
            a[str[i]]++;
        } else {
            a[str[i]] = 1;
        }
    }
    return a;
}

console.log(findDup("test"));