class SelectionSort {
  constructor() {
    this.bigO = 'O(n^2)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(1)';
    this.adaptive = false;
    this.stable = false;
  }

  selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
      let min = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[min]) {
          min = j;
        }
      }
      if (min !== i) {
        [a[i], a[min]] = [a[min], a[i]];
      }
    }
    return a;
  }

  returnSort() {
    return this.selectionSort;
  }
}

const selectionSort = new SelectionSort().selectionSort;
module.exports = { selectionSort, SelectionSort };
