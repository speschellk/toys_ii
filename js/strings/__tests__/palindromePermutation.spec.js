const {
  isPalindromePermutation,
  isPalindromePermutationSort
} = require('../palindromePermutation');

describe('isPalindromePermutation', () => {
  test('Returns null if no input', () => {
    expect(isPalindromePermutation()).toBeNull();
  });

  test('Returns null if input is empty string', () => {
    expect(isPalindromePermutation('')).toBeNull();
  });

  test('Returns true for palindrome permutations with even number of chars', () => {
    expect(isPalindromePermutation('baba')).toEqual(true);
  });

  test('Returns true for palindrome permutations with odd number of chars', () => {
    expect(isPalindromePermutation('abb')).toEqual(true);
  });

  test('Returns true for valid permutations that contain upper and lower case chars', () => {
    expect(isPalindromePermutation('Tact Coa')).toEqual(true);
  });

  test('Returns false for invalid permutations', () => {
    expect(isPalindromePermutation('abbj')).toEqual(false);
    expect(isPalindromePermutation('gaa aam')).toEqual(false);
  });
});

describe('isPalindromePermutationSort', () => {
  test('Returns null if no input', () => {
    expect(isPalindromePermutationSort()).toBeNull();
  });

  test('Returns null if input is empty string', () => {
    expect(isPalindromePermutationSort('')).toBeNull();
  });

  test('Returns true for palindrome permutations with even number of chars', () => {
    expect(isPalindromePermutationSort('baba')).toEqual(true);
  });

  test('Returns true for palindrome permutations with odd number of chars', () => {
    expect(isPalindromePermutationSort('abb')).toEqual(true);
  });

  test('Returns true for valid permutations that contain upper and lower case chars', () => {
    expect(isPalindromePermutationSort('Tact Coa')).toEqual(true);
  });

  test('Returns false for invalid permutations', () => {
    expect(isPalindromePermutationSort('babj')).toEqual(false);
    expect(isPalindromePermutationSort('gaa aam')).toEqual(false);
  });
});
