// Binary Search is an efficient algorithm used to find the position of a target value within a sorted array.
//Binary Search works on sorterd array
/*How binary Search Works-->
 Unlike linear search, 
 it repeatedly divides the search interval in half, significantly reducing the number of comparisons. */

let nums = [-1, 0, 3, 5, 9, 12];

let left = 0;
let right = nums.length - 1;

let middle = Math.floor((left + right) / 2);

function binarySearch(nums, n) {
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] == n) return middle;
    if (n < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch(nums, 10));
