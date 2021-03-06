const swap = require('./swap');

class HeapSort {
  constructor(a) {
    this.bigO = 'O(n log(n))';
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(1)';
    this.adaptive = false;
    this.stable = false;
    this.len = a.length;
  }

  heapSort(a, i) {

    for (let i = 0; i < Math.floor(this.len / 2); i++) {
      this.sink(a, i);
    }
    for (let j = a.length - 1; j >= 0; j--) {
      swap(a, j, 0);
      --this.len;
      this.sink(a, 0);
    }
    return a;
  }

  sink(a, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < this.len && a[left] > a[max]) {
      max = left;
    }
    if (right < this.len && a[right] > a[max]) {
      max = right;
    }
    if (max !== i) {
      swap(a, i, max);
      this.sink(a, max);
    }
  }
}

module.exports = { HeapSort };
