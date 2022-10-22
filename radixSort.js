// Write a function that takes in an array of non-negative integers and returns a sorted
// version of the array. Use the Radix Sort algorithm to sort the array.

// Sample input: array = [8762, 654, 3008, 345, 87, 65, 234, 12, 2]
// Sample output: sorted = [2, 12, 65, 87, 234, 345, 654, 3008, 8762]

//time complexity: The *n* represents the length of the input array added to *b* which
//is the base of the numbering system we use(in this case 10), and *d* is the max
//number of digits we have to sort through(in this case it was 4).

//space complexity: Similar to our time complexity, because we have to use countingSort
//our approach requires a O(n + b) scenario.

//O(d * (n + b)) time | O(n + b) space
function radixSort(array) {
  // Write your code here.
  if (array.length === 0) return array;

  const maxNumber = Math.max(...array);

  let digit = 0;
  while (maxNumber / 10 ** digit > 0) {
    countingSort(array, digit);
    digit++;
  }
  return array;
}

function countingSort(array, digit) {
  const sortedArray = new Array(array.length).fill(0);
  const countArray = new Array(10).fill(0);

  const digitColumn = 10 ** digit;
  for (const num of array) {
    const countIndex = Math.floor(num / digitColumn) % 10;
    countArray[countIndex]++;
  }

  for (let i = 1; i < 10; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = array.length - 1; i > -1; i--) {
    const countIndex = Math.floor(array[i] / digitColumn) % 10;
    countArray[countIndex]--;
    const sortedIndex = countArray[countIndex];
    sortedArray[sortedIndex] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = sortedArray[i];
  }
}
