class CountingSort {
  constructor() {
    this.bigO = 'O(n + k)'; // k is number of lists
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(n)';
    this.adaptive = false;
    this.stable = false;
  }

  countingSort(a) {
    const numCounts = [];
    const sorted = [];
    let sortIndex = 0;
    let count;

    for (let num of a) {
      numCounts[num] = numCounts[num] ? ++numCounts[num] : 1;
    }

    for (let i = 0; i < numCounts.length; i++) {
      count = numCounts[i];
      for (let j = 0; j < count; j++) {
        sorted[sortIndex++] = i;
      }
    }
    return sorted;
  }
}

const countingSort = new CountingSort().countingSort;
module.exports = { countingSort, CountingSort };
