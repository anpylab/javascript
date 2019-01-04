/**
 * Sub array max and min
 */
let a = [1, 2, 3, 4, 6, 8, 10, 12];

function getSubArr(a) {
    let subArr = [];
    for (let i = 0; i < a.length; i++) {
        let arr = [];
        for (let j = 0; j < i + 1; j++) {
            arr.push(a[j]);
        }
        subArr.push(arr);
    }
    return subArr;
}
let subArr = getSubArr(a);
let maxMin = subArr.map(v => {
    let s = v.sort((x, y) => {
        return x > y ? 1 : -1;
    });
    return {
        min: s[0],
        max: s[s.length - 1]
    };

});
console.log(maxMin);