/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.com/problems/search-insert-position/
 */
var searchInsert = function (a, target) {
  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    let x = Math.round((l + r) / 2);
    if (a[x] > target) {
      r = x - 1;
    } else if (a[x] < target) {
      l = x + 1;
    } else {
      return x;
    }
  }
  return l;
};

let a = searchInsert([1,3,5,6], 2)
console.log(a);