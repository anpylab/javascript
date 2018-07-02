/**
 * Longest Polindrome word in the given string.
 * @param 
 */
function findLongestPolindromeWord(s) {
    if (s == null) {
        return;
    }
    let arr = s.split(' ').filter((value) => isPolindore(value));
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

function isPolindore(substr) {
    let reverseStr = substr.split('').reverse().join('');
    return substr == reverseStr;
}
let str = 'That trip with a kayak was quite an adventure!';
console.log(findLongestPolindromeWord(str));