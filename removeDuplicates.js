// SOLUTION 1
// TIME COMPLEXITY : n*n;
let a = [1, 2, 5, 2, 1, 8];

let b = [];

let len = a.length;
for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

// SOLUTION 2
// TIME COMPLEXITY: n*log n
let c = [1, 2, 5, 2, 1, 8];

let d = [];
let lent = a.length;
c.sort(); // [1,1,2,2,5,8];
let temp;

for (let i = 0; i < lent; i++) {
  if (c[i] !== temp) {
    d.push(c[i]);
    temp = c[i];
  }
}

console.log(d);

// SOLUTION 3
let x = [1, 2, 5, 2, 1, 8];
let y = [...new Set(x)];
console.log(y);
