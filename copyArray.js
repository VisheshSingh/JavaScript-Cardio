// HOW TO CLONE AN ARRAY

// SOLUTION 1
let arr = [1, 2, 3, 4];
let arr2 = Array.from(arr);
console.log(arr2);

// SOLUTION 2
let arr = [1, 2, 3, 4];
let arr2 = [].concat(arr);
console.log(arr2);

// SOLUTION 3
let arr = [1, 2, 3, 4];
let arr2 = JSON.parse(JSON.stringify(arr));
console.log(arr2);

// SOLUTION 4
let arr = [1, 2, 3, 4];
let arr2 = Object.assign([], arr);
console.log(arr2);

// SOLUTION 5
let arr = [1, 2, 3, 4];
let arr2 = [...arr];
console.log(arr2);

// SOLUTION 6
let arr = [1, 2, 3, 4];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}
console.log(arr2);

// SOLUTION 7
let arr = [1, 2, 3, 4];
let arr2 = arr.splice(0);
console.log(arr2);

// SOLUTION 8
let arr = [1, 2, 3, 4];
let arr2 = arr.map(x => x);
console.log(arr2);
