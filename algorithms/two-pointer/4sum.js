/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * https://leetcode.com/problems/4sum/
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      current = nums[i] + nums[j];
      l = j + 1;
      r = nums.length - 1;
      while (l < r) {
        const sum = current + nums[l] + nums[r];

        if (sum > target) {
          r--;
        }
        else if (sum < target) {
          l++;
        }
        else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);


          while (nums[l] === nums[l + 1]) {
            l++;
          }
          while (nums[r] === nums[r - 1]) {
            r--
          }
          l++;
          r--;
        }

      }
      while (nums[j] == nums[j + 1]) j++
    }
    while (nums[i] == nums[i + 1]) i++
  }
  return res
};
let a = fourSum([2, 2, 2, 2, 2], 8);
console.log('mmmmmmmmmmmmm');
console.log(a)