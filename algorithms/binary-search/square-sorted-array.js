/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */
var sortedSquares = function (nums) {
  let squareNums = nums.map(e => e*e);
  return squareNums;
};

let a = sortedSquares([-4, -1, 0, 3, 10])
console.log(a);