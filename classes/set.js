module.exports = class Set {
  constructor() {
    this.__values = [];
    this.size = 0;
  }

  add(value) {
    if (!this.has(value)) {
      this.__values.push(value);
      this.size++;
    } else {
      return false;
    }
  }

  clear() {
    this.__values = [];
    this.size = 0;
  }

  delete(target) {
    for (let i = 0; i < this.__values.length; i++) {
      if (this.__values[i] === target) {
        this.__values.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  entries() {
    return this.__values.map(value => {
      return [value, value];
    });
  }

  forEach(cb, thisArg) {
    for (let i = 0; i < this.__values.length; i++) {
      if (thisArg) {
        cb.call(thisArg, thisArg[i], i);
      } else {
        cb(this.__values[i], i, this);
      }
    }
  }

  has(target) {
    if (this.__values.includes(target)) {
      return true;
    }
    return false;
  }

  values() {
    return this.__values;
  }
};
