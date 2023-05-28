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

let a = largestNumber([10, 2, 25]);
console.log(a);