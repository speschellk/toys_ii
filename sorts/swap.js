function swap(a, index1, index2) {
  if (typeof a === 'string') {
    a = a.split('');
  }
  let temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
  return typeof a === 'string' ? a.join('') : a;
}

module.exports = swap;
