class Set {
  constructor() {
    this.values = [];
    this.size = 0;
  }

  add(value) {
    if (!this.values.contains(value)) {
      this.values.push(value);
      this.size++;
    }
  }

  clear() {
    this.values = [];
  }

  delete(target) {
    for (let i = 0; i < this.values.length; i ++) {
      if (this.values[i] === target) {
        this.values.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  entries() {
    const entries = [];
    for (let value of this.values) {
      entries.push([value, value]);
    }
    return entries;
  }

  forEach(cb, thisArg) {
    for (let i = 0; i < this.values.length; i++) {
      if (thisArg) {
        cb.call(thisArg, this.values[i], i, this);
      } else {
        cb(this.values[i], i, this);
      }
    }
  }

  has(target) {
    if (this.values.contains(target)) {
      return true;
    }
    return false;
  }

  values() {
    return this.values;
  }
}
