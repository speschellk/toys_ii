const { insertionSort } = require('./insertion');

class ShellSort {
  constructor() {
    this.bigO = 'O(n^1.5)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = 'O(n log(n))';
    this.space = 'O(1)';
    this.adaptive = true;
    this.stable = false;
  }

  shellSort(a) {
    let gaps = [701, 301, 132, 57, 23, 10, 4, 1];
    let tmp;

    for (let gap in gaps) {
      insertionSort(a);
      for (let i = gap; i < a.length; i++) {
        tmp = a[i];
        for (let j = i; j >= gap && a[j - gap] > tmp; j -= gap) {
          a[j] = a[j - gap];
        }
        a[i] = tmp;
      }
    }
    return a;
  }
}

const shellSort = new ShellSort().shellSort;
module.exports = { shellSort, ShellSort };
