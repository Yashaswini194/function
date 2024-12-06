function findLongestWord(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Initialize variables to keep track of the longest word
  let longestWord = "";
  
  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    // If the current word is longer than the longestWord, update longestWord
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  // Return the longest word
  return longestWord;
}

// Example usage:
const sentence = "I love programming and solving problems";
const result = findLongestWord(sentence);
console.log(result);  // Output: "programming"
