/**
 * @param {number[]} nums
 * @return {number}
 * 97ms
 * https://leetcode.com/problems/longest-consecutive-sequence
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  if (nums.length === 2) {
    if (nums[1] - nums[0] === 0) {
      return 1;
    }
  }
  const newNums = nums.sort((a, b) => a - b);

  let abc = [];
  let s = [];
  for (let index = 1; index < newNums.length; index++) {
    if ((newNums[index] - newNums[index - 1] === 0)) continue;
    if ((newNums[index] - newNums[index - 1]) === 1) {
      if (abc.length === 0) {
        abc.push(newNums[index - 1])
      }
      abc.push(newNums[index])
    } else {
      s.push(abc.length);
      abc = [];
    }

  }
  s.push(abc.length);
  if (nums.length >= 3 && findMax(s) === 0) {
    return 1;
  }
  return findMax(s); 
};



function findMax(arr) {
  return Math.max(...arr);
}

let a = longestConsecutive([3, 0, 7, 2, 5, 8, 4, 6, 0, 1,9,9])
console.log(a);