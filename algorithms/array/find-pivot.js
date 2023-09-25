/**
 * O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
//911 ms
let pivotIndex2 = function (nums) {
  sumLeft = 0;
  sumRight = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log(i);
    if (i <= 0) {
      sumLeft = 0;
    } else {
      sumLeft += nums[i - 1];
    }

    for (let j = i + 1; j < nums.length; j++) {
      sumRight += nums[j];
    }
    // console.log(sumLeft + "_" + i + "_" +sumRight);

    if (sumLeft === sumRight) {
      return i;
    } else {
      sumRight = 0;
    }

    if (i === nums.length - 1) {
      return -1
    }
  }

};


//69ms
let pivotIndex = function (a) {
  let x = {};

  for (let i = 0; i < a.length; i++) {
    if (i == 0) {
      x[i] = { left: 0, right: 0 }
    } else {
      x[i] = { left: x[i - 1].left + a[i - 1], right: 0 }
    }
  }

  for (let j = a.length - 1; j >= 0; j--) {
    if (j == a.length - 1) {
      x[j] = { left: x[j].left, right: 0 }
      // console.log(x[j]);
    } else {
      x[j] = { left: x[j].left, right: x[j + 1].right + a[j + 1] }
    }
  }
  console.log(x);
  for (const key in x) {
    if (Object.hasOwnProperty.call(x, key)) {
      const element = x[key];
      if (element.left == element.right) {
        return key
      }
      if (key == a.length - 1) {
        return -1
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
//46ms
var pivotIndex3 = function (nums) {
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i]
  };
  for (let i = 0; i < nums.length; i++) {
    if (i != 0) {
      leftSum += nums[i - 1]
    };
    rightSum -= nums[i]
    if (leftSum === rightSum) {
      return i
    };
  };
  return -1
};

let check = pivotIndex([1, 2, 3])

console.log(check)


