const { insertionSort } = require('../../sorts/insertion');
/*
Given two strings, write a method to decide whether one is a permutation of the other.

I: two strings
O: boolean indiciating whether one string is permutation of other
C: ?
E: missing either of two strings, empty strings, exact same strings, strings of non-letters

Examples:
str1 = '12345'
str2 = '32451'
return true

str1 = 'aaa'
str2 = 'aaa'
return true

str1 = 'abc'
str2 = 'a'
return false

str1 = '12345'
str2 = '67890'
return false

str1 = '12345'
str2 = '11234'
return false
*/

// Time: O(s1 + s2) wrt string length
// Space: O(s1) wrt string1 length
function isPermutation(str1, str2) {
  if (!str1 || !str2) return null;
  if (str1.length !== str2.length) return false;

  let charMap = new Map();
  for (let char of str1) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char));
    } else {
      charMap.set(char, 1);
    }
  }

  for (let char of str2) {
    if (!charMap.has(char)) {
      return false;
    } else {
      charMap.delete(char);
    }
  }
  return charMap.size ? false : true;
}

/* ---------------------------------------------------------------------------------------- */

// Sort strings using insertion sort, then compare characters
// Heap sort has better time complexity, but can't use since data are nearly sorted

// Time: O(n^2) wrt string length
// Space: O(1)
function isPermutationSort(str1, str2) {
  if (!str1 || !str2) return null;
  if (str1.length !== str2.length) return false;

  str1 = insertionSort(str1);
  str2 = insertionSort(str2);
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = { isPermutation, isPermutationSort };
