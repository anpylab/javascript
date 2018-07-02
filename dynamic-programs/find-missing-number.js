function findMissingNumber(a) {
    let sort = a.sort();
    let missingNumber = [];
    console.log(sort)
    for (let i = 0; i < sort.length; i++) {
        let s = sort[i]+1;
        let e = sort[i+1];
        for (let j = s; j < e; j++) {
            missingNumber.push(j);
        }
    }
    return missingNumber;
}
let arr = [4, 6, 7, 9, 5, 1];
console.log(findMissingNumber(arr));