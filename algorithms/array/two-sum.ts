/**Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

//125ms
function twoSum1(a: number[], target: number) {
  for (let i = 0; i <= a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

var twoSum = function (nums, target) {
    const numToIndex = new Map(); // Create a hash map to store the numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed to reach the target

        // Check if the complement exists in the hash map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i]; // If found, return the indices
        }

        // Store the current number and its index in the hash map
        numToIndex.set(nums[i], i);
    }

    return []; // Return an empty array if no solution is found
};

// 63ms
function twoSum22(a: number[], target: number) {
  let object: any = {};
  for (let i = 0; i <= a.length; i++) {

    if (object[target-a[i]]) {
      return [object[target - a[i]].index, i];
    }
    object[a[i]] = {value:target - a[i], index: i};
  }

  return false;
}

let b = twoSum22([2, 6, 4, 3], 9);
console.log(b);
