const { isUnique, isUniqueSet, isUniqueSort } = require('../isUnique');

describe('isUnique', () => {
  test('Returns null when given no string as input', () => {
    expect(isUnique()).toBeNull();
  });
  test('Returns null when given empty string as input', () => {
    expect(isUnique('')).toBeNull();
  });
  test('Returns true for strings with all unique letters', () => {
    let str = 'abcdefg';
    expect(isUnique(str)).toEqual(true);
  });
  test('Returns true for strings with unique non-letter characters', () => {
    let str = '(123) 456-7890';
    expect(isUnique(str)).toEqual(true);
  });
  test('Returns false for strings with repeated letters', () => {
    let str = 'abcdefga';
    expect(isUnique(str)).toEqual(false);
  });
  test('Returns false for strings with repeated non-letter characters', () => {
    let str = '(123)) 456-7890';
    expect(isUnique(str)).toEqual(false);
  });
});

describe('isUniqueSet', () => {
  test('Returns null when given no string as input', () => {
    expect(isUniqueSet()).toBeNull();
  });
  test('Returns null when given empty string as input', () => {
    expect(isUniqueSet('')).toBeNull();
  });
  test('Returns true for strings with all unique letters', () => {
    let str = 'abcdefg';
    expect(isUniqueSet(str)).toEqual(true);
  });
  test('Returns true for strings with unique non-letter characters', () => {
    let str = '(123) 456-7890';
    expect(isUniqueSet(str)).toEqual(true);
  });
  test('Returns false for strings with repeated letters', () => {
    let str = 'abcdefga';
    expect(isUniqueSet(str)).toEqual(false);
  });
  test('Returns false for strings with repeated non-letter characters', () => {
    let str = '(123)) 456-7890';
    expect(isUniqueSet(str)).toEqual(false);
  });
});

describe('isUniqueSort', () => {
  // test cases must not be nearly sorted in order to use heap sort
  test('Returns null when given no string as input', () => {
    expect(isUniqueSort()).toBeNull();
  });
  test('Returns null when given empty string as input', () => {
    expect(isUniqueSort('')).toBeNull();
  });
  test('Returns true for strings with all unique letters', () => {
    let str = 'ag';
    expect(isUniqueSort(str)).toEqual(true);
  });
  test('Returns true for strings with unique non-letter characters', () => {
    let str = '%$+~`.';
    expect(isUniqueSort(str)).toEqual(true);
  });
  test('Returns false for strings with repeated letters', () => {
    let str = 'ax2d-%a20';
    expect(isUniqueSort(str)).toEqual(false);
  });
  test('Returns false for strings with repeated non-letter characters', () => {
    let str = '()))(()(()()()()';
    expect(isUniqueSort(str)).toEqual(false);
  });
});
