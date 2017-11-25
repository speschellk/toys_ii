/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// Time complexity: O(s * t)
// Space complexity: O(s)
function commonCharacters(s, t) {
  if (!s || !t) return null;
  let union = '';

  for (let char of s) {
    if (t.includes(char)) {
      union += char;
    }
  }
  return union;
}

// Time complexity: O(s * (a - 1) * n)
// Space complexity: O(s)
function commonChars(s) {
  if (arguments.length < 2) return null;
  let union = '';
  let shared;

  for (let char of s) { // O(s)
    for (let i = 1; i < arguments.length; i++) { // O(a - 1)
      shared = true;
      if (!arguments[i].includes(char)) { // O(n)
        shared = false;
        break;
      }
    }
    if (shared) {
      union += char;
    }
  }
  return union;
}

module.exports = { commonCharacters, commonChars };
