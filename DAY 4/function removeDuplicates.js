function removeDuplicates(arr) {
  // Initialize an empty array to store unique values
  let uniqueArray = [];

  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the value is already in the uniqueArray
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break; // Exit the loop if a duplicate is found
      }
    }

    // If no duplicate is found, add the value to the uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  // Return the array with unique values
  return uniqueArray;
}

// Example usage:
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(originalArray);
console.log(result); // Output: [1, 2, 3, 4, 5]
