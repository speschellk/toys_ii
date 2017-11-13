/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

EXAMPLE:
Input: "Mr John Smith    "
Output: "Mr%20John%20Smith"

I: string and true length of string
O: string with spaces replaced by '%20'
C: length of new string must account for true length
E: no input, no spaces, all spaces, multiple spaces in a row
*/

function URLify(str, trueLen) {
  if (!str) return null;
  return str.slice(0, trueLen).replace(/\s/g, '%20');
}

module.exports = URLify;
