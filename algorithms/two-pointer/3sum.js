var threeSum = function (nums) {
  // Khai báo một mảng để lưu kết quả cuối cùng
  const res = [];

  // Sắp xếp mảng số nguyên đầu vào theo thứ tự tăng dần
  nums.sort((a, b) => a - b);

  // Bắt đầu vòng lặp duyệt qua từng số trong mảng
  for (let i = 0; i < nums.length; i++) {
    // Lấy số thứ i ra và gán vào biến a
    const a = nums[i];

    // Nếu a > 0, thoát khỏi vòng lặp vì không thể có tổng bằng 0 nữa
    if (a > 0) break;

    // Nếu số thứ i trùng với số trước đó, tiếp tục vòng lặp để tránh trùng lặp
    if (i > 0 && a === nums[i - 1]) continue;

    // Khai báo hai con trỏ l và r để thực hiện tìm kiếm hai số còn lại
    let l = i + 1;
    let r = nums.length - 1;

    // Bắt đầu vòng lặp while để tìm kiếm hai số còn lại
    while (l < r) {
      // Tính tổng của ba số a, nums[l], nums[r]
      const threeSum = a + nums[l] + nums[r];

      // Nếu tổng lớn hơn 0, giảm giá trị của r để giảm tổng
      if (threeSum > 0) {
        r--;
      }
      // Nếu tổng nhỏ hơn 0, tăng giá trị của l để tăng tổng
      else if (threeSum < 0) {
        l++;
      }
      // Nếu tổng bằng 0, thêm ba số vào kết quả và di chuyển l và r
      else {
        res.push([a, nums[l], nums[r]]);
        l++;
        r--;

        // Loại bỏ các giá trị trùng lặp để tránh bị trùng lặp trong kết quả
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  // Trả về mảng chứa tất cả các bộ ba số có tổng bằng 0
  return res;
}


let a = sum3([-6, -8, -9, 4, -14, 6, -10, 7, 12, 13, 4, 9, 7, 14, -12, 7, 0, 14, -1, -3, 2, 2, -3, 11, -6, -10, -13, -13, 1, -9, 2, 2, -2, 8, -9, 0, -9, -12, 14, 10, 8, 3, 4, 0, -6, 7, 14, 9, 6, -2, 13, -15, 8, -5, 3, -13, -8, 5, -11, 0, 11, 6, -13, -14, -9, -15, -7, -11, 10, -7, 14, 4, 3, 3, 11, 13, -13, 11, -1, 0, -6, -10, 0, 9, 0, 10, 11, 0, 0, -14, -15, -12, -1, 10, 12, -2, 2, -10, 2, -2, -10, 2, -13, 1, 12, 5, -1, -15, 1, 5, -8, 3, 10, 8])
console.log(a);
