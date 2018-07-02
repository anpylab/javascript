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