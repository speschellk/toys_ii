class CountingSort {
  constructor() {
    this.bigO = 'O(n)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(n)';
    this.adaptive = false;
    this.stable = false;
  }

  countingSort(a) {
    let numCounts = [];
    let sortedArray = [];
    let sortIndex = 0;
    let count;

    for (let num of a) {
      if (numCounts[num]) {
        numCounts[num] = numCounts[num] + 1;
      } else {
        numCounts[num] = 1;
      }
    }

    for (let i = 0; i < numCounts.length; i++) {
      count = numCounts[i];

      for (let j = 0; j < count; j++) {
        sortedArray[sortIndex] = i;
        sortIndex++;
      }
    }
    return sortedArray;
  }
}

const countingSort = new CountingSort().countingSort;
module.exports = { countingSort, CountingSort };
