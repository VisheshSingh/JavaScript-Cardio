// HOW TO CLONE AN ARRAY

// SOLUTION 1
let arr = [1, 2, 3, 4];
let res1 = Array.from(arr);
console.log(res1);

// SOLUTION 2
let res2 = [].concat(arr);
console.log(res2);

// SOLUTION 3
let res3 = JSON.parse(JSON.stringify(arr));
console.log(res3);

// SOLUTION 4
let res4 = Object.assign([], arr);
console.log(res4);

// SOLUTION 5
let res5 = [...arr];
console.log(res5);

// SOLUTION 6
let res6 = [];
for (let i = 0; i < arr.length; i++) {
  res6.push(arr[i]);
}
console.log(res6);

// SOLUTION 7
let res7 = arr.splice(0);
console.log(res7);

// SOLUTION 8
let res8 = arr.map(x => x);
console.log(res8);
