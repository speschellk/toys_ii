const { commonCharacters, commonChars } = require('../commonCharacters');

describe('commonCharacters', () => {
  test('Returns null if fewer than two strings entered', () => {
    expect(commonCharacters()).toBeNull();
    expect(commonCharacters('cat')).toBeNull();
  });

  test('Returns the characters shared by all strings', () => {
    expect(commonCharacters('cat', 'catsup')).toEqual('cat');
    expect(commonCharacters('catsup', 'catsup')).toEqual('catsup');
  });

  test('Returns empty string when no characters in common', () => {
    expect(commonCharacters('cat', 'dog')).toEqual('');
  });
});

describe('commonChars', () => {
  test('Returns null if fewer than two strings entered', () => {
    expect(commonChars()).toBeNull();
    expect(commonChars('cat')).toBeNull();
  });

  test('Returns the characters shared by all strings', () => {
    expect(commonChars('cat', 'catsup', 'cats')).toEqual('cat');
    expect(commonChars('catsup', 'catsup', 'catsup')).toEqual('catsup');
    expect(commonChars('dogimal', 'dimness', 'mid')).toEqual('dim');
  });

  test('Returns empty string when no characters in common', () => {
    expect(commonChars('cat', 'dog', 'bunny')).toEqual('');
  });
});
