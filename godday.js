// function to take 2 strings and generate a string with the common letters from the input strings. 
// the letters should appear in the output string as often as they are common in the input strings.
// abbc + baab = abb
function doSomething(str1, str2) {
    if (str1 == null || str2 == null) {
        return;
    }
    let len = str1.length;
    let ch = null;
    let charArr = [];
    for (let i = 0; i < len; i++) {
        ch = str1.charAt(i);
        if ((charArr.indexOf(ch) == -1)) {
            charArr.push(ch);
        }
    }
    return charArr.join('');
}

console.log(doSomething('abbc', 'baab'));
//console.log(doSomething('abbc', 'baab') === 'abb');
// https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/
https://en.wikipedia.org/wiki/Best,_worst_and_average_case