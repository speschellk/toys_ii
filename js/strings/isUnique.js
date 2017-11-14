const { HeapSort } = require('../../sorts/heap');
/*
Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

I: string of characters
O: boolean indicating whether or not string contains only unique characters
C: upper and lower case letters are not the same
E: no string, empty string
*/

// Time: O(n) wrt string length
// Space: O(n) wrt string length
function isUniqueSet(str) {
  if (!str) return null;

  const charSet = new Set();
  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    } else {
      charSet.add(char);
    }
  }
  return true;
}

/* ------------------------------------------------------------------------------------- */

// C: no auxiliary space

// Time: O(n^2) wrt string length
// Space: O(1)
function isUnique(str) {
  if (!str) return null;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return false;
      }
    }
  }
  return true;
}

/* ---------------------------------------------------------------------------------- */

// C: better than quadratic time and no extra space

// Time: O(n + n log(n)) wrt str length
// Space: O(1)
function isUniqueSort(str) {
  if (!str) return null;

  // use heap sort for O(n log(n)) time and O(1) space
  str = new HeapSort(str).heapSort(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
}

module.exports = { isUniqueSet, isUnique, isUniqueSort };
