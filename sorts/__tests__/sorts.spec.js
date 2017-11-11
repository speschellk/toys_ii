const { bubbleSort } = require('../bubble');
const { insertionSort } = require('../insertion');
const { selectionSort } = require('../selection');

describe('Sorts correctly sort array of inputs', () => {
  let unsorted1, unsorted2, nearlySorted;
  const sorted1 = [-10, -8, -1, 5, 12, 56, 183, 200];
  const sorted2 = ['aardvark', 'bee', 'cat', 'dog', 'elephant'];
  const sorted3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  beforeEach(() => {
    unsorted1 = [56, -1, 200, 183, 12, 5, -10, -8];
    unsorted2 = ['dog', 'cat', 'elephant', 'aardvark', 'bee'];
    nearlySorted = [1, 2, 4, 3, 5, 6, 7, 9, 8, 10];
  });

  test('bubbleSort correctly sorts', () => {
    expect(bubbleSort(unsorted1)).toMatchObject(sorted1);
    expect(bubbleSort(unsorted2)).toMatchObject(sorted2);
    expect(bubbleSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('insertionSort correctly sorts', () => {
    expect(insertionSort(unsorted1)).toMatchObject(sorted1);
    expect(insertionSort(unsorted2)).toMatchObject(sorted2);
    expect(insertionSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('selectionSort correctly sorts', () => {
    expect(selectionSort(unsorted1)).toMatchObject(sorted1);
    expect(selectionSort(unsorted2)).toMatchObject(sorted2);
    expect(selectionSort(nearlySorted)).toMatchObject(sorted3);
  });
});
