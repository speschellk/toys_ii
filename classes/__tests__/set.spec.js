const Set = require('../set');

describe('Set class', () => {
  const set = new Set();
  let values;

  beforeEach(() => {
    values = [1, 2, 3, 4, 5];
    set.clear();

    for (let value of values) {
      set.add(value);
    }
  });

  describe('add method', () => {
    test('Adds a value to the set', () => {
      expect(set.__values).toMatchObject(values);
    });

    test('Increments size property when adding a value to the set', () => {
      expect(set.size).toEqual(5);
      set.add(6);
      expect(set.size).toEqual(6);
    });

    test('Does not add duplicate values to the set', () => {
      expect(set.add(2)).toEqual(false);
      expect(set.__values).toMatchObject(values);
    });
  });

  describe('clear method', () => {
    test('Removes all values from the set', () => {
      set.clear();
      expect(set.__values).toMatchObject([]);
    });

    test('Returns undefined', () => {
      expect(set.clear()).toEqual(undefined);
    });
  });

  describe('delete method', () => {
    test('Deletes a target node contained in the set', () => {
      const val = 1;
      const index = values.indexOf(val);
      values.splice(index, 1);

      set.delete(val);
      expect(set.__values).toMatchObject(values);
    });

    test('Returns true when the target node is deleted', () => {
      const valInSet = values[0];
      expect(set.delete(valInSet)).toEqual(true);
    });

    test('Returns false if the target node is not found', () => {
      const valNotInSet = null;
      expect(set.delete(valNotInSet)).toEqual(false);
    });
  });

  describe('entries method', () => {
    test('Returns an array', () => {
      expect(set.entries()).toBeInstanceOf(Array);
    });
    test('Returns all entries in set in key value pairs', () => {
      const entries = [];
      for (let value of values) {
        entries.push([value, value]);
      }
      expect(set.entries()).toMatchObject(entries);
    });
  });

  describe('forEach method', () => {

    test('Calls a callback on every value in the set', () => {
      const callback = jest.fn();
      set.forEach(callback);
      expect(callback).toHaveBeenCalledTimes(set.size);
    });
    test('Calls a callback with a given context', () => {
      const results = [];
      const arr = ['Jeeves', 'Tucker', 'Birb', 'Lucy', 'Griffon'];
      const callback = item => results.push(item);
      set.forEach(callback, arr);
      expect(results).toMatchObject(arr);
    });
  });

  describe('has method', () => {

    test('Returns true if target is contained in set', () => {
      const valInSet = values[2];
      expect(set.has(valInSet)).toEqual(true);
    });

    test('Returns false if target not in set', () => {
      const valNotInSet = null
      expect(set.has(valNotInSet)).toEqual(false);
    });
  });

  describe('values method', () => {

    test('Returns an array', () => {
      expect(set.values()).toBeInstanceOf(Array);
    });
    test('Returns all values in set', () => {
      expect(set.values()).toMatchObject(values);
    });
    test('Returns empty array if set is empty', () => {
      const set = new Set();
      expect(set.values()).toMatchObject([]);
    });
  });
});
