/**
 * Input: nums = [1,2,3,4]
   Output: [24,12,8,6]
 * @param nums 
 * @returns 
 */
function productExceptSelf2(nums: number[]): number[] {
  let returnArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let tich = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        tich *= nums[j];
      }
    }

    returnArray.push(tich);
  }

  return returnArray;
}

function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);

  // Tính tích tiền tố (prefix)
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Nhân tích hậu tố (postfix) vào kết quả
  let postfix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= postfix;
    postfix *= nums[i];
  }

  return answer;
}







let pro = productExceptSelf([2,3,4,5]);
console.log("zzzz");

console.log([pro]);
