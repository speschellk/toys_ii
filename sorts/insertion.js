const swap = require('./swap');

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
        swap(a, j + 1, j);
      }
      if (typeof a === 'string') {
        a = a.split('');
        a[j + 1] = temp;
        a = a.join('');
        console.log('a is:', a);
      } else {
        a[j + 1] = temp;
      }
    }

    return a;
  }
}

const insertionSort = new InsertionSort().insertionSort;
module.exports = { insertionSort, InsertionSort };
