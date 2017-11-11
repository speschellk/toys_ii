class MergeSort {
  constructor() {
    this.bigO = 'O(n log(n))';
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(n)';
    this.adaptive = false;
    this.stable = true;
  }

  mergeSort(a) {
    if (a.length < 2) {
      return a;
    }

    let mid = Math.floor(a.length / 2);
    let left = a.slice(0, mid);
    let right = a.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let a = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        a.push(left.shift());
      } else {
        a.push(right.shift());
      }
    }
    return a.concat(left.slice()).concat(right.slice());
  }
}

const mergeSort = new MergeSort().mergeSort;
module.exports = { mergeSort, MergeSort };
