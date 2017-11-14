/*
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.

If the "compressed" string is not smaller than the original string, your method should return
the original string.

You can assume the string has only uppercase and lowercase letters (a - z).

I: string
O: compressed string - string with chars followed by their counts
C: if compressed length = original length, return original
E: no input, empty input, upper and lower case versions of same letters
*/

// Time: O(n) wrt str
// Space: O(n) wrt str
function stringCompressor(str) {
  if (!str) return null;

  let count = 0;
  let lastChar = str[0];
  let compressed = '';

  for (let char of str) {
    if (char !== lastChar) {
      compressed += lastChar + count;
      count = 1;
      lastChar = char;
    } else {
      ++count;
    }
  }
  compressed += lastChar + count;
  return compressed.length < str.length ? compressed : str;
}

module.exports = stringCompressor;
