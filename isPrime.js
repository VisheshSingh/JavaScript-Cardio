// 0, 1 are not prime
// 2 is prime. All the other even numbers are not prime

let isPrime = n => {
  if (n === 2) return true;

  if (n < 2 || !Number.isInteger(n) || n % 2 === 0) return false;

  let ctr = 0;
  for (let i = 3; i < n - 1; i += 2) {
    ctr++;
    if (n % i === 0) {
      console.log("ctr:", ctr);
      return false;
    }
  }
  console.log("ctr:", ctr);
  return true;
};

console.log(isPrime(101));

// for (let i = 0; i < 30; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
