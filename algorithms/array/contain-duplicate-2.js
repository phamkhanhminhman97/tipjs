/**
 * 132ms
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 */
var containsNearbyDuplicate = function (nums, k) {
  const mySet = new Set()
  const abc = {};
  for (let i = 0; i < nums.length; i++) {
    const check = mySet.has(nums[i]);
    mySet.add(nums[i]);
    if (!check) {
      abc[nums[i]] = i;
    } else {
      let q = i - abc[nums[i]];
      if (q <= k) {
        return true
      };
      console.log(q);
      if (i <= nums.length) {
        delete abc[nums[i]];
        abc[nums[i]] = i;
      }
    }
  }
  return false;
};

let a = containsNearbyDuplicate([1, 2, 3, 4, 1], 3);
console.log(a);

/**
 * 65ms
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */
var containsNearbyDuplicate2 = function (nums, k) {
  const mySet = new Set();
  for (let i = 0; i < nums.length; i++) {
    // Nếu số đã tồn tại trong Set, có nghĩa là đã tìm thấy cặp số trùng lặp, trả về true.
    if (mySet.has(nums[i])) {
      return true;
    }

    mySet.add(nums[i]);
    console.log(mySet);
    // Giới hạn Set chỉ chứa tối đa k+1 phần tử để đảm bảo khoảng cách tối đa là k.
    if (mySet.size > k) {
      mySet.delete(nums[i - k])
      console.log(mySet);
    }
  }
  return false;
};
let b = containsNearbyDuplicate2([1,2,1],2)
console.log(b);