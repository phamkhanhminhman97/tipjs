/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 * 57ms
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (let i = 0; i < s.length; i++) {

    if (s[i] !== s[s.length - i - 1]) {
      return false
    }
  }
  return true;
};
