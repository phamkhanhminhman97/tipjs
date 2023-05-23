
//runtimes 9000ms
function containsDuplicate(nums: number[]): boolean {
   nums = nums.sort();
  const dict  : number[] = [] ;

  for (let i = 0; i < nums.length; i++) {
    let t = dict.includes(nums[i]);
    if (t) {
      return true;
    }
    dict.push(nums[i]);
  }

  return false;
}

//100ms
function containsDuplicateX(nums: number[]): boolean {
  let dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      return true;
    }
    dict[nums[i]] = 1;
  }
  return false;
}
let q: boolean = containsDuplicateX([1, 2, 3, 4, 0, 0]);

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * 200ms time
 */
var containsDuplicate2 = (nums) => {
  nums = nums.sort();

  return hasDuplicate(nums);
};

const hasDuplicate = (nums) => {
  for (let curr = 0; curr < nums.length - 1; curr++) {
    /* Time O(N) */
    const next = curr + 1;

    const isNextDuplicate = nums[curr] === nums[next];
    if (isNextDuplicate) return true;
  }

  return false;
};

/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * 84ms time
 */
var containsDuplicate3 = (nums) => {
  const numsSet = new Set(nums); /* Time O(N) | Space O(N) */
  const isEqual = numsSet.size === nums.length;

  return !isEqual;
};

