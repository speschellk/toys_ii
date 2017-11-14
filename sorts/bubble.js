const swap = require('./swap');

class BubbleSort {
  constructor() {
    this.bigO = 'O(n^2)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = 'O(n)';
    this.space = 'O(1)';
    this.adaptive = true;
    this.stable = true;
  }

  bubbleSort(a) {
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
          a = swap(a, i, i+1);
          swapped = true;
        }
      }
    } while (swapped);
    return a;
  }
};

const bubbleSort = new BubbleSort().bubbleSort;
module.exports = { bubbleSort, BubbleSort };
