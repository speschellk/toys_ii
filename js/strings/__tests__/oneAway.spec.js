const isOneAway = require('../oneAway');

test('Returns null when given no string as input', () => {
  expect(isOneAway()).toBeNull();
});
test('Returns null when given empty string as input', () => {
  expect(isOneAway('', 'abc')).toBeNull();
  expect(isOneAway('abc', '')).toBeNull();
  expect(isOneAway('', '')).toBeNull();
});
test('Returns false for strings that are more than one unit of length apart', () => {
  expect(isOneAway('a', 'abc')).toEqual(false);
  expect(isOneAway('abc', 'a')).toEqual(false);
});
test('Returns true for strings that are one remove/insert operation away', () => {
  expect(isOneAway('pale', 'ple')).toEqual(true);
  expect(isOneAway('ple', 'pale')).toEqual(true);
  expect(isOneAway('pl e', 'ple')).toEqual(true);
});
test('Returns true for strings that are one replace operation apart', () => {
  expect(isOneAway('pale', 'bale')).toEqual(true);
  expect(isOneAway('g', 'h')).toEqual(true);
});
test('Returns false for strings that are more than one operation apart', () => {
  expect(isOneAway('pale', 'bake')).toEqual(false);
  expect(isOneAway('pale', 'preal')).toEqual(false);
});

