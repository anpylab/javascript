/**
 * var example
 */
for (var i = 0; i < 3; i++) {
    setTimeout((_i) => {
        console.log("_i=" + i);
    }, 1000);
}
// Output
//_i=3
//_i=3
//_i=3

/**
 * let example
 */
for (let i = 0; i < 3; i++) {
    setTimeout((_i) => {
        console.log("_i=" + i);
    }, 1000);
}
// Output
//_i=0
//_i=1
//_i=2