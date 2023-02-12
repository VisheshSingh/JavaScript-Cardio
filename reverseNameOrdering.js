let names = ["Adams, John", "Winslet, Kate", "Atwell, Hayley", "Evans, Chris"];

// SOLUTION 1
let firstNLast = names.map(item => item.split(', ').reverse().join(', '));
console.log({firstNLast})

// SOLUTION 2
let result = names.map(item => item.replace(/(\w+), (\w+)/, '$2 $1'));
console.log({result})