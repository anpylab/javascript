/**
 * longest parentheses
 * @param {*} str 
 */
function longestParentheses(str) {
    let stack = [];
    let max = 0;
    str.split('').forEach(e => {
        if ("(" === e) {
            stack.push(")");
        } else {
            let c = stack.pop();
            if (')' == c) {
                max += 2;
            }
        }

    });
    return max;
}
console.log(longestParentheses('(()')); //2
console.log(longestParentheses(')()())')); //4