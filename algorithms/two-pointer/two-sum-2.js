/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {*} s 
 * @param {*} target 
 * @returns 
 */
var twoSum = function (s, target) {
  let temp = [...s]

  let a = []
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    if (j > 0 && s[i] + s[j] > target) break;
    if (i > 1 && s[i] == s[i - 1]) continue;
    while (j < s.length) {
      if (s[i] + s[j] === target) {
        a.push(findIndex(temp, s[i]) + 1)
        // temp[findIndex(temp,s[i])] = '123'
        temp[temp.indexOf(s[i])] = '123'
        a.push(findIndex(temp, s[j]) + 1)
        // temp[findIndex(temp, s[j])] = '465'
        temp[temp.indexOf(s[j])] = '456'
      }
      j++
    }
  }
  return a
}


function twoSum2(s, target) {
  let q = new Map();
  let a = []
  for (let i = 0; i < s.length; i++) {
    console.log();
    if (q.has(target - s[i])) {
      a.push(q.get(target - s[i]))
      a.push(i)
    }
    q.set(s[i], i)
  }
  return a
}
/**
 * O(n)
 * @param {*} s 
 * @param {*} target 
 * @returns 
 */
function twoSum3(s, target) {
  // Khởi tạo biến l và r để theo dõi vị trí của phần tử trái và phải trong mảng s.
  l = 0;
  r = s.length - 1;
  // Khởi tạo một mảng a để lưu trữ kết quả (nếu có).
  let a = []
  // Bắt đầu một vòng lặp while để tìm cặp phần tử có tổng bằng target.
  while (l < s.length - 1) {
    // Nếu tổng của phần tử tại vị trí l và r lớn hơn target, giảm giá trị của r.
    if (s[l] + s[r] > target) {
      r--
    }
    // Nếu tổng của phần tử tại vị trí l và r nhỏ hơn target, tăng giá trị của l.
    else if (s[l] + s[r] < target) {
      l++
    }
    // Nếu tổng của phần tử tại vị trí l và r bằng target, thêm vị trí l+1 và r+1 vào mảng a và thoát khỏi vòng lặp.
    else {
      a.push(l + 1);
      a.push(r + 1)
      break;
    }
  }
  // Trả về mảng a chứa vị trí của cặp phần tử có tổng bằng target.
  return a;
}


let t = twoSum3([2, 3, 4], 6)
console.log(t);