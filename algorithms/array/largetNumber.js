/**
 * @param {number[]} nums
 * @return {string}
 */


let largestNumber = function (array) {
  let x = {}
  for (let index = 0; index < array.length; index++) {
    x[array[index]] = String(array[index])

  }

  x = Object.values(x).sort(
    (p1, p2) => (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0);
  let str = ''
  for (let i = 0; i < x.length; i++) {
    str += x[i]

  }
  return str
};

var largestNumber2 = function (nums) {
  nums.sort((a, b) => {
    let sa = a.toString()
    let sb = b.toString()
    return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1
  })
  if (nums[0] === 0) return '0'

  return nums.join('')
};

let a = largestNumber([10, 2, 25]);
console.log(a);