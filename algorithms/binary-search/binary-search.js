/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(a, target) {
  let l = 0;
  let r = a.length - 1;

  while(l<=r) {
    let x = Math.round((l+r)/2);
    if (a[x] > target) {
      r = x-1;
    } else if (a[x] < target) {
      l = x +1;
    } else {
      return x;
    }
  }
  return -1;
}


let a = search([1,2,3,4,5,6,7,8,9,10], 9)
console.log(a);