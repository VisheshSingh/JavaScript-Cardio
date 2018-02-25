// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    //console.log(wordArr);

    const sorted = wordArr.sort((a,b) => {
        return b.length - a.length;
    })
    //console.log(sorted);
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    const longestWord = sorted.filter((word) => {
        return word.length === sorted[0].length;
    })

    //console.log(longestWord);
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    if(longestWord.length === 1){
        return longestWord[0];
    }else {
        return longestWord;
    }
  }
  
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {
    // SOLUTION 1:  
    // const chunkedArr = [];
    // let i = 0;
  
    // while(i < arr.length) {
    //     chunkedArr.push(arr.slice(i, i+len));
    //     i+=len;
    // }

    // return chunkedArr;

    //SOLUTION 2
    const chunkedArr = [];

    arr.array.forEach(element => {
        const last = chunkedArr[chunkedArr.length-1];
    });
  }
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {
      // SOLUTION 1
      //return arrays.reduce((a,b) => a.concat(b));

      // SOLUTION 2
      //return [].concat.apply([], arrays);

      /* function add(a, b, c){
          return a+b+c;
      }
      const arr = [1, 2, 3];
      console.log(add(...arr)); */

      //SOLUTION 3
      return [].concat(...arrays);
  }
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {
    return formatString(str1) === formatString(str2);
  }

  function formatString(str){
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
  }
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {
      let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
          if(char === 'z' || char === 'Z'){
            return 'a';
          } else{
            return String.fromCharCode(char.charCodeAt() + 1);
          }
      })

      newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
          return vowel.toUpperCase();
      })
      return newStr;
  }
  
  // Call Function
  const output = letterChanges('hello there');
  
  console.log(output);