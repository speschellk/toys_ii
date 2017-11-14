function swap(a, index1, index2) {
  let isString = typeof a === 'string' ? true : false;
  if (isString) {
    a = a.split('');
  }
  let temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
  return isString ? a.join('') : a;
}

module.exports = swap;
