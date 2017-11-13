class RadixSort {
  constructor() {
    this.bigO = 'O(nk)';
    this.avgTime = this.bigO;
    this.nearlySortedTime = this.bigO;
    this.space = 'O(n + k)';
    this.adaptive = false; // some implementations are adaptive
    this.stable = false; // LSD sort is stable
  }

  radixSort(a, radix) {
    radix = radix || 10;

    // Determine minimum and maximum values
    let minValue = a[0];
    let maxValue = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] < minValue) {
        minValue = a[i];
      } else if (a[i] > maxValue) {
        maxValue = a[i];
      }
    }

    // Perform counting sort on each exponent/digit, starting at the least significant digit
    let exponent = 1;
    while ((maxValue - minValue) / exponent >= 1) {
      a = this.countingSortByDigit(a, radix, exponent, minValue);

      exponent *= radix;
    }

    return a;
  }

  countingSortByDigit(a, radix, exponent, minValue) {
    let bucketIndex;
    let buckets = new Array(radix);
    let output = new Array(a.length);

    // Initialize bucket
    for (let i = 0; i < radix; i++) {
      buckets[i] = 0;
    }

    // Count frequencies
    for (let i = 0; i < a.length; i++) {
      bucketIndex = Math.floor(((a[i] - minValue) / exponent) % radix);
      buckets[bucketIndex]++;
    }

    // Compute cumulates
    for (let i = 1; i < radix; i++) {
      buckets[i] += buckets[i - 1];
    }

    // Move records
    for (let i = a.length - 1; i >= 0; i--) {
      bucketIndex = Math.floor(((a[i] - minValue) / exponent) % radix);
      output[--buckets[bucketIndex]] = a[i];
    }

    // Copy back
    for (let i = 0; i < a.length; i++) {
      a[i] = output[i];
    }

    return a;
  }
}

const radixSort = new RadixSort().radixSort;
module.exports = { radixSort, RadixSort };
