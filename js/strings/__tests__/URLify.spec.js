const URLify = require('../URLify');

test('Returns null if no input', () => {
  expect(URLify()).toBeNull();
});

test('Returns null if input is empty string', () => {
  expect(URLify('')).toBeNull();
});

test('Returns string with spaces replaced by %20', () => {
  let str = 'Mr John Smith';
  let len = 13;
  let URLified = 'Mr%20John%20Smith';
  expect(URLify(str, len)).toEqual(URLified);
});

test('Returns string with spaces replaced by %20', () => {
  let str = ' ';
  let len = 1;
  let URLified = '%20';
  expect(URLify(str, len)).toEqual(URLified);
});

test('Returns string with spaces replaced by %20', () => {
  let str = 'Mr John Smith    ';
  let len = 13
  let URLified = 'Mr%20John%20Smith';
  expect(URLify(str, 13)).toEqual(URLified);
});
