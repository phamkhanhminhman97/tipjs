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
