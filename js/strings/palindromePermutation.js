const { insertionSort } = require('../../sorts/insertion');
/*
Given a string, write a function to check if it is a permutation of a palindrome.
The palindrome does not need to be limited to just dictionary words.

EXAMPLES
Input: Tact Coa
Output: True

I: string
O: boolean indicating whether or not it's a permutation of a palindrome
C: ignore whitespace
E: org. pal. may have mirrored letters (even # char) or single middle letter (odd # char), upper and lower case chars are considered equal
*/

// Time: O(n) wrt string length
// Space: O(n) wrt string length
function isPalindromePermutation(str) {
  if (!str) return null;
  const charSet = new Set();

  for (let char of str) {
    if (char !== ' ') {
      char = char.toLowerCase();
      if (!charSet.has(char)) {
        charSet.add(char);
      } else {
        charSet.delete(char);
      }
    }
  }
  return charSet.size > 1 ? false : true;
}

/* ------------------------------------------------------------------------------------------- */

// C: O(1) space

// Time: O(n + n^2) ---> O(n^2) due to sorting
// Space: O(1)
function isPalindromePermutationSort(str) {
  if (!str) return null;

  let uniquesCount = 0;
  let i = 0;

  str = str.replace(/\s/g, '').toLowerCase();
  let arr = insertionSort(str.split(''));

  while(uniquesCount < 2 && i <= arr.length + 1) {
    if (arr[i] !== arr[i + 1]) {
      if (uniquesCount === 1) {
        return false;
      } else {
        ++uniquesCount;
      }
      ++i;
    } else {
      i += 2;
    }
  }
  return true;
}

module.exports = { isPalindromePermutation, isPalindromePermutationSort };
