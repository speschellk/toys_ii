const { isUnique, isUniqueSet, isUniques } = require('../isUnique');

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
