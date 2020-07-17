var myArr = []
const pureFn = number => arr => arr.concat([number]);

console.log(pureFn(1)(myArr))
console.log(pureFn(2)(myArr))