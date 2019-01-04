/**
 * 
 * @param {*} str 
 */
function longestPolindromeString(str) {
    let max = 0;
    let maxLenStr = null;
    for (let i = str.length; i > 0; i--) {
        for (let j = 0; j < str.length; j++) {
            let sub = str.substring(j, i);
            if (sub == sub.split('').reverse().join('')) {
                max = Math.max(max, sub.length);
                if (max == sub.length) {
                    maxLenStr = sub;
                }
            }
        }
    }
    console.log(maxLenStr, max);
}
let str = "babad";
longestPolindromeString(str);

//https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/#arrays