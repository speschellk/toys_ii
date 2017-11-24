/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

function charFrequency(str) {
  if (!str) return null;
  const chars = new Map();

  for (let char of str) {
    let freq = chars.get(char) ? chars.get(char) + 1 : 1;
    chars.set(char, freq);
  }
  return sort(chars.entries());
}

function sort(m) {
  let swapped;
  let a = [...m];

  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i][1] < a[i + 1][1] || a[i][1] === a[i + 1][1] && a[i][0] > a[i + 1][0]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return a;
}

module.exports = charFrequency;
