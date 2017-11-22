/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. Deduplicate your return array without * using uniq().
 */

function findAnagrams(str) {
  if (!str) return null;
  const anagrams = [];
  const anagramSet = new Set();

  (function generateAnagrams(word, s) {
    if (!s) {
      if (!anagramSet.has(word)) {
        anagramSet.add(word);
        return anagrams.push(word);
      }
    }
    for (let i = 0; i < s.length; i++) {
      generateAnagrams(
        `${word}${s[i]}`,
        `${s.slice(0, i)}${s.slice(i + 1)}`
      );
    }
  })('', str);

  return anagrams;
}

module.exports = findAnagrams;
