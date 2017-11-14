const stringCompressor = require('../stringCompression');

test('Returns null when given no string as input', () => {
  expect(stringCompressor()).toBeNull();
});
test('Returns null when given empty string as input', () => {
  expect(stringCompressor('')).toBeNull();
});
test('Returns compressed string when it is shorter than the original', () => {
  expect(stringCompressor('aabcccccaaa')).toEqual('a2b1c5a3');
  expect(stringCompressor('aabcccccAAA')).toEqual('a2b1c5A3');
});
test('Returns original string when compressed version is no shorter than original', () => {
  expect(stringCompressor('aa')).toEqual('aa'); // a2
  expect(stringCompressor('aba')).toEqual('aba'); // a1b1a1
  expect(stringCompressor('abcbca')).toEqual('abcbca'); // a1b1c1b1c1a1
});
