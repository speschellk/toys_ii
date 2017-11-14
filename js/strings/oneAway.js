/*
There are three types of edits that can be performed on strings:
  insert a character,
  remove a character, or
  replace a character.
Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -> true    (remove)
pales. pale -> true  (remove)
pale. bale -> true   (replace)
pale. bake -> false  (replace x2)

I: two strings
O: boolean indicating whether or not they are one or fewer operations away
C:
E: no inputs, empty inputs,
*/

// Time: O(n) wrt longer str
// Space: O(1)
function isOneAway(str1, str2) {
  if (!str1 || !str2) return null;

  // str1 is always the longer one if differing lengths
  if (str1.length < str2.length) {
    [str1, str2] = [str2, str1];
  }
  if (str1.length > str2.length + 1) {
    return false;
  }
  let opsCount = 0;
  let i = 0;
  let j = 0;

  while (opsCount < 2 && i <= str1.length + 1 && j <= str2.length + 1) {
    if (str1[i] !== str2[j]) {
      if (opsCount === 1) {
        return false;
      } else {
        ++opsCount;
        ++i;
        if (str1.length === str2.length) {
          ++j;
        }
        continue;
      }
    } else {
      ++i;
      ++j;
    }
  }
  return true;
}

module.exports = isOneAway;
