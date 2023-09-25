/**Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

//125ms
function twoSum(a: number[], target: number) {
  for (let i = 0; i <= a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
}

// 63ms
function twoSum2(a: number[], target: number) {
  let object: any = {};
  for (let i = 0; i <= a.length; i++) {

    if (object[target-a[i]]) {
      return [object[target - a[i]].index, i];
    }
    object[a[i]] = {value:target - a[i], index: i};
  }

  return false;
}

let a = twoSum2([2, 6, 4, 3], 9);
console.log(a);
