/**
 * @param {string} s
 * @return {boolean}
 * 50ms
 * https://leetcode.com/problems/valid-parentheses
 */
var isValid = function (s) {
  const stack = [];
  const openBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const closeBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  if (s.length % 2 !== 0) return false;
  for (const item of s) {
    if (openBrackets[item]) {
      stack.push(item)
    } else {
      if (stack[stack.length - 1] === closeBracket[item]) {
        stack.pop();
      } else {
        stack.push(item)
      }
    }
  }
  return stack.length === 0;
};