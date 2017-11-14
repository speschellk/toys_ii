const isRotation = require('../stringRotation');

test('Returns null when given no strings as input', () => {
  expect(isRotation()).toBeNull();
});

test('Returns null when given two empty strings as input', () => {
  expect(isRotation('', '')).toBeNull();
});

test('Returns false when string lengths are different', () => {
  expect(isRotation('', 'abc')).toEqual(false);
  expect(isRotation('abc', 'ab')).toEqual(false);
});

test('Returns true when s2 is rotation of s1', () => {
  expect(isRotation('waterbottle', 'erbottlewat')).toEqual(true);
  expect(isRotation('bbabb', 'bbbba')).toEqual(true);
  expect(isRotation('souses', 'sessou')).toEqual(true);
});

test('Returns false when s2 is not a rotation of s1', () => {
  expect(isRotation('waterbottle', 'rebottletwa')).toEqual(false);
  expect(isRotation('souses', 'ssesou')).toEqual(false);
});
