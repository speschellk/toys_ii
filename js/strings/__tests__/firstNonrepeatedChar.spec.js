const findFirstUnique = require('../firstNonrepeatedChar');

describe('findFirstUnique', () => {
  test('Returns null for no input', () => {
    expect(findFirstUnique()).toBeNull();
  });
  test('Returns null for empty string input', () => {
    expect(findFirstUnique('')).toBeNull();
  });
  test('Returns first unique char', () => {
    expect(findFirstUnique('ABA')).toEqual('B');
    expect(findFirstUnique('AACBDB')).toEqual('C');
    expect(findFirstUnique('ABCDE')).toEqual('A');
  });
  test('Treats upper and lower case characters as equivalent', () => {
    expect(findFirstUnique('AaCBDB')).toEqual('C');
    expect(findFirstUnique('AACcBDdB')).toEqual(false);
  });
  test('Returns false when no unique chars', () => {
    expect(findFirstUnique('ABAB')).toEqual(false);
    expect(findFirstUnique('CABABC')).toEqual(false);
    expect(findFirstUnique('CC')).toEqual(false);
  });
});
