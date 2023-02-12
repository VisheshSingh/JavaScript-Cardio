let phrase = "The first number is 32, the second number is 45, and the third number is 100.";

let regex = /\d+/g

const numbersAsString = phrase.match(regex);
const numbers = numbersAsString.map(num => +num);
console.log({numbersAsString, numbers})