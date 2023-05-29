/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum2 = function (a, k) {
  let count = 0;
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum === k) {
      count++;
    }
    sum2 = 0;
    for (let j = i + 1; j < a.length; j++) {
      sum2 += a[j];
      if (sum2 === k) {
        count++;
      }
    }
  }
  return count;
};

let subarraySum = function (a, k) {
  let count = 0;
  let sum = 0;
  let x = []
  for (let i = 0; i < a.length; i++) {
    
    x.push(a[i]);
    sum += a[i];
    if (i >0) {
      x.push(sum);
    }
   
  }
  console.log(x);
  return count;
}

let check = subarraySum([1, 2, 3], 3);

console.log(check);