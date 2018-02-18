// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    //METHOD 1: USING SPLIT, REVERSE, JOIN
  /* return str
    .split('')
    .reverse()
    .join(''); */

    ///////////////////////////////////
    //METHOD 2: USING OLD SCHOOL FOR LOOP
   /*  let revString = '';
    for(let i=str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }
    return revString; */

    ////////////////////////////////////
    /* let revString = '';
    for(let i=0; i <= str.length - 1; i++){
        revString =  str[i] + revString;
    }
    return revString; */

    /////////////////////////////////////
    //METHOD 3:
    /* let revString = '';
    for(let s of str){
        revString =  s + revString;
    }
    return revString; */

    ///////////////////////////////////////
    //METHOD 4: USING FOR EACH LOOP
    /* let revString = '';
    str.split('').forEach(function(element) {
        revString = element + revString;
    });
    return revString */

    //////////////////////////////////////
    //METHOD 5: FOR EACH USING ARRAW FUNCTIONS
    /* let revString = '';
    str.split('').forEach(element => revString = element + revString);
    return revString */

    ///////////////////////////////////
    //METHOD 6: USING HIGHER ORDER FUNC - REDUCE
    /* return str.split('').reduce((revString, char) => char+revString, ''); */
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    let revString = str.split('').reverse().join('');
    return ( revString === str);
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function
const output = reverseInt(12345);

console.log(output);