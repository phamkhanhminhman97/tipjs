/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */
//256ms
function topKFrequent2(nums, k) {
    let uniqueArray = [];
    let returnArray = [];
    for (let i = 0; i < nums.length; i++) {
        let check = uniqueArray.includes(nums[i]);
        if (!check) {
            uniqueArray.push(nums[i]);
        }
    }
    console.log(uniqueArray);

    let inc = 0;
    for (let i = 0; i < uniqueArray.length; i++) {
        console.log(uniqueArray[i]);
        for (let j = 0; j < nums.length; j++) {
            console.log(nums[j]);
            if (uniqueArray[i] === nums[j]) {
                console.log('zxc');
                inc += 1;
            }
        }
        returnArray.push({ value: uniqueArray[i], inc })
        inc = 0;
        console.log(returnArray);
    }


    returnArray = returnArray.sort(
        (p1, p2) => (p1.inc < p2.inc) ? 1 : (p1.inc > p2.inc) ? -1 : 0);

    let result = [];
    for (let i = 0; i < k; i++) {

        result.push(returnArray[i].value);

    }
    return result;
}


/**
 * Set - Frequency Counter
 * Time O(NlogN) | Space O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//75ms
function topKFrequent(nums, k) {
    let x = {};
    for (let i = 0; i < nums.length; i++) {
        if (x[nums[i]]) {
            x[nums[i]].inc++;
        } else {
            x[nums[i]] = { value: nums[i], inc: 0 }
        }

    }
    x = Object.values(x);
    x = x.sort(
        (p1, p2) => (p1.inc < p2.inc) ? 1 : (p1.inc > p2.inc) ? -1 : 0);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(x[i].value);
    }
    return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//54ms
var topKFrequent3 = function (nums, k) {
    let res = [], map = new Map();

    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    console.log(map);

    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    console.log(sortedArray);
    for (let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }

    return res;
};
// 1,2,3,4
var topk = topKFrequent3([1, 2, 2, 3, 3, 4], 2);
console.log(topk);
