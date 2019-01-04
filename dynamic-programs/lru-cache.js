let x = [];
let s = "azzzzzzzzz";
s.split('').forEach(v => {
    if (x[v]) {
        x[v] = parseInt(x[v]) + 1;
    } else {
        x[v] = 1;
    }
});
console.log(x);
let m = new Map();
m.set("one", 1);
m.set("two", 2);
console.log(m);
for (let [k, v] of m.entries()) {
    console.log(k, v);
}