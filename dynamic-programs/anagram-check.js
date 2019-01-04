function anagramCheck(s1, s2) {
    if (s1 != null && s2 != null) {
        if (s1.length == s2.length) {
            let str1 = s1.split('').sort().join('');
            let str2 = s2.split('').sort().join('');
            if (str1 == str2) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }

}
//console.log(anagramCheck('eat', 'ate'));
function getLargestNumber(arr) {

    let sortedArr = arr.sort(); // O(nLogn) - Avg
    let len = (sortedArr.length) - 1;
    let m = new Map();
    for (let k = 1; k <= 9; k++) {
        m.set(k, []);
    }
    console.log(sortedArr)
    for (let i = len; i >= 0; i--) {
        let key = '' + sortedArr[i];
        let value = sortedArr[i];
        let arr = m.get(parseInt(key[0]));

        if (sortedArr[i] < 10) {
            arr.shift(sortedArr[i]);
        } else {
            arr.push(sortedArr[i]);
        }
        m.set(parseInt(key[0]), arr);
    }
    console.log(m);
    let sum = "";
    for (let i = 9; i >= 0; i--) {
        if (m.get(i) != null && m.get(i).length > 0) {
            sum += m.get(i);
        }
    }
    console.log("Largest Sum=" + sum);

}
let a = [3, 5, 22, 98, 8,9,76, 29, 44];
//console.log(getLargestNumber(a));

var maxCombine = (a) => +(a.sort((x, y) =>{console.log(x,y); return +("" + y + x) - +("" + x + y)}).join(''));
 
// test & output
console.log([
  [1, 34, 3, 98, 9, 76, 45, 4]
].map(maxCombine));