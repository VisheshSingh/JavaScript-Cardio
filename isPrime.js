// 0, 1 are not prime
// 2 is prime. All the other even numbers are not prime

// n = x*y;
// => x < y
// => x*x < x*y
// => x*x < n
// => x < sqrt(n)

// e.g: 6 = 1*6, 2*3, 3*2, 6*1
// => 2 < 3
// => 2*2 < 2*3
// => 4 < 6
// => 2 < sqrt(6)

let isPrime = n => {
  if (n === 2) return true;

  if (n < 2 || !Number.isInteger(n) || n % 2 === 0) return false;

  let ctr = 0;
  for (let i = 3; i < Math.sqrt(n); i += 2) {
    ctr++;
    if (n % i === 0) {
      console.log("ctr:", ctr);
      return false;
    }
  }
  console.log("ctr:", ctr);
  return true;
};

console.log(isPrime(100000001));

// for (let i = 0; i < 30; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
