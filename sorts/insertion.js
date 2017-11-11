class InsertionSort {
  constructor() {
    this.bigO = 'O(n^2)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = 'O(n)';
    this.space = 'O(1)';
    this.adaptive = true;
    this.stable = true;
  }

  insertionSort(a) {
    for (let i = 0; i < a.length; i++) {
      let temp = a[i];
      let j = i - 1;
      for (j; j >= 0 && a[j] > temp; j--) {
        a[j + 1] = a[j];
      }
      a[j + 1] = temp;
    }
    return a;
  }

  returnSort() {
    return this.insertionSort;
  }
};

const insertionSort = new InsertionSort().insertionSort;
module.exports = { insertionSort, InsertionSort };
