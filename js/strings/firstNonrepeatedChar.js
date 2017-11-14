/*
Given an arbitrary input string, return the first nonrepeated character in
the string. For example:

   firstNonRepeatedCharacter('ABA'); // => 'B'
   firstNonRepeatedCharacter('AACBDB'); // => 'C'

I: string
O: first unique char in the string
C: must be first incidence of unique char; treat upper and lower case chars as equal
E: no input, empty, no uniques (return false? return char with smallest frequency?)
*/

// Time: O(2n) --> O(n) wrt str length
// Space: O(n) wrt str length
function findFirstUnique(str) {
  if (!str) return null;

  const charMap = {};
  str = str.toUpperCase();

  for (let char of str) {
    charMap[char] = charMap[char] ? ++charMap[char] : 1;
  }
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }
  return false;
}

module.exports = findFirstUnique;
