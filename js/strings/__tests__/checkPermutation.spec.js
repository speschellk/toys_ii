const { isPermutation, isPermutationSort } = require('../checkPermutation');

describe('isPermutation', () => {
  test('Returns null if one or more empty strings passed in', () => {
    expect(isPermutation('', 'abc')).toBeNull();
    expect(isPermutation('', '')).toBeNull();
    expect(isPermutation('abc', '')).toBeNull();
  });

  test('Returns null if nothing passed in', () => {
    expect(isPermutation()).toBeNull();
  });

  test('Returns false if strings have different lengths', () => {
    expect(isPermutation('abc', 'abcde')).toEqual(false);
  });

  test('Returns false for strings of same length but different chars', () => {
    expect(isPermutation('12345', '67890')).toEqual(false);
    expect(isPermutation('12345', '11234')).toEqual(false);
  });

  test('Returns true for identical strings', () => {
    expect(isPermutation('abc', 'abc')).toEqual(true);
  });

  test('Returns true for valid permutations', () => {
    expect(isPermutation('12345', '32451')).toEqual(true);
    expect(isPermutation('$%^#@', '#$@^%')).toEqual(true);
  });
});

describe('isPermutationSort', () => {
  test('Returns null if one or more empty strings passed in', () => {
    expect(isPermutation('', 'abc')).toBeNull();
    expect(isPermutation('', '')).toBeNull();
    expect(isPermutation('abc', '')).toBeNull();
  });

  test('Returns null if nothing passed in', () => {
    expect(isPermutation()).toBeNull();
  });

  test('Returns false if strings have different lengths', () => {
    expect(isPermutation('abc', 'abcde')).toEqual(false);
  });

  test('Returns false for strings of same length but different chars', () => {
    expect(isPermutation('12345', '67890')).toEqual(false);
    expect(isPermutation('12345', '11234')).toEqual(false);
  });

  test('Returns true for identical strings', () => {
    expect(isPermutation('abc', 'abc')).toEqual(true);
  });

  test('Returns true for valid permutations', () => {
    expect(isPermutation('12345', '32451')).toEqual(true);
    expect(isPermutation('$%^#@', '#$@^%')).toEqual(true);
  });
});
