/**
 * bracket validator
 * @param {*} str 
 */
function bracketValidator(str) {
    let c = str.split('');
    let stack = [];
    for (let i = 0; i < c.length; i++) {
        switch (c[i]) {
            case "{":
                stack.push("}");
                break;
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            default:
                let ch = stack.pop();
                if (ch != c[i]) {
                    return false;
                }
                break;
        }
    }
    return !stack.length;
}

console.log(bracketValidator("{()([])}")); // true
console.log(bracketValidator("{()([])}{")); //false
console.log(bracketValidator("{()([])}{}")); //true
console.log(bracketValidator("{(([])}{}")); //false

// Bracket validator method 2
/**
 * 
 * @param {*} str 
 */
function isValidBracket(str) {
    let a = str.split('');
    let stack = [];
    for (let i in a) {
        if ("{" === a[i]) {
            stack.push("}");
        } else if ("[" == a[i]) {
            stack.push("]");
        } else if ("(" == a[i]) {
            stack.push(")");
        } else {
            let v = stack.pop();
            if (a[i] != v) {
                return false;
            }
        }
    }
    return !stack.length;
}
console.log("---------Option 2--------");
console.log(isValidBracket("{()([])}")); // true
console.log(isValidBracket("{()([])}{")); //false
console.log(isValidBracket("{()([])}{}")); //true
console.log(isValidBracket("{(([])}{}")); //false