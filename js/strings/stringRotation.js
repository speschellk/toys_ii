/*
Assume you have a method isSubstring, which checks if one word is a substring
of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat").

I: two strings
O: boolean indicating whether or not s2 is a rotation of s1
C: can call 'isSubstring' only once
E: empties, different lengths
*/

function isRotation(s1, s2) {
  if (!s1 && !s2) return null;
  if (s1.length !== s2.length) return false;

  return isSubstring(s1+s1, s2) ? true : false;
}

function isSubstring(s1, s2) {
  return s1.includes(s2) ? true : false;
}

module.exports = isRotation;
