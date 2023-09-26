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

function longestConsecutive2(nums) {
  let mySet = new Set(nums);
  let mySet2 = [...mySet];
  let s = []
  let q = 0;
  let maxScore = 0;
  for (let index = 0; index < mySet2.length; index++) {
    let next = mySet[index] + 1;
    let current = mySet[index];
    let check = mySet.has(next);
    const isStreak = () => mySet.has(current + 1)
    while (isStreak()) {              /* Time O(N) */
      current++;
      q++;
    }
    maxScore = Math.max(maxScore, q);
  }
  return maxScore
}

let a = longestConsecutive2([3, 0, 7, 2, 5, 8, 4, 6, 0, 1,9,9])
console.log(a);