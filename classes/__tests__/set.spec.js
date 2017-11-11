const Set = require('../set');

describe('add method', () => {
  test('Adds a value to the set', () => {
    const set = new Set();
    const value = 1;
    const values = [];
    set.add(value);
    values.push(value);
    expect(set.__values).toMatchObject(values);
  });

  test('Increments size property when adding a value to the set', () => {
    const set = new Set();
    expect(set.size).toEqual(0);
    set.add(5);
    expect(set.size).toEqual(1);
  });

  test('Does not add duplicate values to the set', () => {
    const set = new Set();
    set.add(2);
    expect(set.add(2)).toEqual(false);
    expect(set.__values).toMatchObject([2]);
  });
});

describe('clear method', () => {
  let set;

  beforeEach(() => {
    set = new Set();
    set.add(1);
    set.add(2);
  });

  test('Removes all values from the set', () => {
    set.clear();
    expect(set.__values).toMatchObject([]);
  });

  test('Returns undefined', () => {
    expect(set.clear()).toEqual(undefined);
  });
});

describe('delete method', () => {
  let set;

  beforeEach(() => {
    set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
  });

  test('Deletes a target node contained in the set', () => {
    set.delete(1);
    expect(set.__values).toMatchObject([2, 3]);
  });

  test('Returns true when the target node is deleted', () => {
    expect(set.delete(1)).toEqual(true);
  });

  test('Returns false if the target node is not found', () => {
    expect(set.delete(70)).toEqual(false);
  });
});

describe('entries method', () => {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);

  test('Returns an array', () => {
    expect(set.entries()).toBeInstanceOf(Array);
  });
  test('Returns all entries in set in key value pairs', () => {
    expect(set.entries()).toMatchObject([[1, 1], [2, 2], [3, 3]]);
  });
});

describe('forEach method', () => {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);

  test('Calls a callback on every value in the set', () => {
    const callback = jest.fn();
    set.forEach(callback);
    expect(callback).toHaveBeenCalledTimes(set.size);
  });
  test('Calls a callback with a given context', () => {
    const results = [];
    const arr = ['Jeeves', 'Tucker', 'Birb'];
    const callback = item => results.push(item);
    set.forEach(callback, arr);
    expect(results).toMatchObject(arr);
  });
});

describe('has method', () => {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);

  test('Returns true if target is contained in set', () => {
    expect(set.has(2)).toEqual(true);
  });

  test('Returns false if target not in set', () => {
    expect(set.has(20)).toEqual(false);
  });
});

describe('values method', () => {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);

  test('Returns an array', () => {
    expect(set.values()).toBeInstanceOf(Array);
  });
  test('Returns all values in set', () => {
    expect(set.values()).toMatchObject([1, 2, 3]);
  });
  test('Returns empty array if set is empty', () => {
    const set = new Set();
    expect(set.values()).toMatchObject([]);
  });
});
