/**
 *  Find two string are isomorphic
 * @param {*} source 
 * @param {*} target 
 */
function isIsomorphic(source, target) {
    if (source.length != target.length) {
        return false;
    }
    const sourceMap = {};
    const targetMap = {};
    const sourceLen = source.length;
    for (let i = 0; i < sourceLen; i++) {
        let sc = source.charAt(i);
        let tc = target.charAt(i);
        if (sourceMap[sc] === undefined && targetMap[tc] === undefined) {
            sourceMap[sc] = tc;
            targetMap[tc] = sc;
        } else if (sourceMap[sc] !== tc) {
            return false;
        }
    }
    return true;
}

function filterIsomorphicWord(ar) {
    let out = [];
    let len = ar.length;
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < (len - i); j++) {
            if (isIsomorphic(ar[j - 1], ar[j])) {
                if (out.indexOf(ar[j - 1]) == -1) {
                    out.push(ar[j - 1]);
                }
                if (out.indexOf(ar[j]) == -1) {
                    out.push(ar[j]);
                }
            }
        }
    }
    return out;
}
/**
 * Group words by unique chars count
 * @param {*} inputArray 
 */
function groupByUniCharArray(inputArray) {
    let groups = {};
    inputArray.forEach(word => {
        let len = word.split('').filter((char, i, charArr) => {
            return charArr.indexOf(char) === i;
        }).length;
        let key = "key_" + word.length + "_" + len;
        groups[key] = groups[key] || [];
        groups[key].push(word);
    });
    return groups;
}

/**
 * Find out isomorphs in all groups
 * @param {*} inputArray 
 */
function findIsomorphs(inputArray) {
    let out = [];
    let groups = groupByUniCharArray(inputArray);
    for (let key in groups) {
        out.push(filterIsomorphicWord(groups[key]));
    }
    return out;
}
//Example 1
console.log(findIsomorphs(['abba', 'deed', 'zxxz', 'aaa', 'bbb', 'asdf', 'qwer']));
/*
  [ 
      [ 'abba', 'deed', 'zxxz' ],
      [ 'aaa', 'bbb' ],
      [ 'asdf', 'qwer' ] 
 ]
*/

// Example 2
console.log(findIsomorphs(['zxzx', 'abab', 'abba', 'deed', 'zxxz', 'aaa', 'bbb', 'asdf', 'qwer']));
/**
 [ 
     [ 'zxzx', 'abab', 'abba', 'deed', 'zxxz' ],
     [ 'aaa', 'bbb' ],
     [ 'asdf', 'qwer' ]
 ]
 */
// Example 3
console.log(findIsomorphs(['zxzx', 'abba', 'deed', 'zxxz', 'aaa', 'bbb', 'asdf', 'qwer']));
/**
 [
     [ 'abba', 'deed', 'zxxz' ],
     [ 'aaa', 'bbb' ],
     [ 'asdf', 'qwer' ] 
]
 */