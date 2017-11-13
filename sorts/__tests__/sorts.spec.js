const { bubbleSort } = require('../bubble');
const { insertionSort } = require('../insertion');
const { selectionSort } = require('../selection');
const { MergeSort } = require('../merge');
const { QuickSort } = require('../quick');
const { shellSort } = require('../shell');
const { HeapSort } = require('../heap');
const { countingSort } = require('../counting');
const { RadixSort } = require('../radix');

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
  test('mergeSort correctly sorts', () => {
    const m = new MergeSort();
    expect(m.mergeSort(unsorted1)).toMatchObject(sorted1);
    expect(m.mergeSort(unsorted2)).toMatchObject(sorted2);
    expect(m.mergeSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('quickSort correctly sorts', () => {
    const q = new QuickSort();
    expect(q.quickSort(unsorted1)).toMatchObject(sorted1);
    expect(q.quickSort(unsorted2)).toMatchObject(sorted2);
    expect(q.quickSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('shellSort correctly sorts', () => {
    expect(shellSort(unsorted1)).toMatchObject(sorted1);
    expect(shellSort(unsorted2)).toMatchObject(sorted2);
    expect(shellSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('heapSort correctly sorts', () => {
    const h1 = new HeapSort(unsorted1);
    const h2 = new HeapSort(unsorted2);
    expect(h1.heapSort(unsorted1)).toMatchObject(sorted1);
    expect(h2.heapSort(unsorted2)).toMatchObject(sorted2);
  });
  test('countingSort correctly sorts', () => {
    expect(countingSort(nearlySorted)).toMatchObject(sorted3);
  });
  test('radixSort correctly sorts', () => {
    const r = new RadixSort();
    expect(r.radixSort(unsorted1)).toMatchObject(sorted1);
    expect(r.radixSort(nearlySorted)).toMatchObject(sorted3);
  });
});
