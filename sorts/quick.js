class QuickSort {
  constructor() {
    this.bigO = 'O(n^2)';
    this.avgTime = 'O(n log(n))';
    this.nearlySortedTime = this.avgTime;
    this.uniqueKeys = 'O(n)';
    this.space = 'O(log n)';
    this.adaptive = true;
    this.stable = false;
  }

  quickSort(a, left, right) {
    left = left || 0;
    right = right || a.length - 1;

    if (a.length <= 1) {
      return a;
    }
    let pivot = this.partitionHoare(a, left, right);

    if (left < pivot - 1) {
      this.quickSort(a, left, pivot - 1);
    }
    if (right > pivot) {
      this.quickSort(a, pivot, right);
    }
    return a;
  }

  partitionHoare(a, left, right) {
    let pivot = a[Math.floor((left + right) / 2)];

    while (left <= right) {
      while (a[left] < pivot) {
        left++;
      }
      while (a[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [a[left], a[right]] = [a[right], a[left]];
        left++;
        right--;
      }
    }
    return left;
  }
}

const quickSort = new QuickSort().quickSort;
module.exports = { quickSort, QuickSort };
