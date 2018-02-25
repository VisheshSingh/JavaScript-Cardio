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
  
  function chunkArray(arr, len) {}
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {}
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {}
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {}
  
  // Call Function
  const output = longestWord('Hello there, my name is Brad');
  
  console.log(output);