const findAnagrams = require('../allAnagrams');

test('Returns null if given no input', () => {
  expect(findAnagrams()).toBeNull();
});

test('Returns list of all anagrams', () => {
  const anagrams = ['ab', 'ba'];
  const anagrams1 = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
  expect(findAnagrams('ab')).toMatchObject(anagrams);
  expect(findAnagrams('abc')).toMatchObject(anagrams1);
});

test('Does not count repeat letters as distinct', () => {
  const anagrams = ['aaa'];
  expect(findAnagrams('aaa')).toMatchObject(anagrams);
});
