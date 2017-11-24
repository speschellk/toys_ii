const charFrequency = require('../characterFrequency');

test('Returns null if no input', () => {
  expect(charFrequency()).toBeNull();
});

test('Returns null if input is empty string', () => {
  const input = '';
  expect(charFrequency(input)).toBeNull();
});

test('Returns array sorted by character frequency', () => {
  const input = 'catch';
  expect(charFrequency(input)).toBeInstanceOf(Array);
});

test('Returned array is sorted in descending order by character frequency', () => {
  const input = 'abbcccdddd';
  const output = [['d', 4], ['c', 3], ['b', 2], ['a', 1]];
  expect(charFrequency(input)).toMatchObject(output);
});

test('Returned array is sorted in ascending order by character when frequency is equal', () => {
  const input = 'dddbbbaaa';
  const output = [['a', 3], ['b', 3], ['d', 3]];
  expect(charFrequency(input)).toMatchObject(output);
});

test('Returned array is sorted in ascending order by character when frequency is equal', () => {
  const input = 'dddbbbaaa';
  const output = [['a', 3], ['b', 3], ['d', 3]];
  expect(charFrequency(input)).toMatchObject(output);
});

test('Returned array correctly sorts by both decreasing char freq and increasing char', () => {
  const input1 = 'mississippi';
  const output1 = [['i', 4], ['s', 4], ['p', 2], ['m', 1]];
  const input2 = 'miaaiaaippi';
  const output2 = [['a', 4], ['i', 4], ['p', 2], ['m', 1]];
  const input3 = 'mmmaaaiiibbb';
  const output3 = [['a', 3], ['b', 3], ['i', 3], ['m', 3]];
  expect(charFrequency(input1)).toMatchObject(output1);
  expect(charFrequency(input2)).toMatchObject(output2);
  expect(charFrequency(input3)).toMatchObject(output3);
});
