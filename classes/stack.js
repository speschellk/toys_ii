module.exports = class Stack {
  constructor() {
    this.storage = {};
    this.__size = 0;
  }

  push(value) {
    this.storage[this.__size++] = value;
  }

  pop() {
    if (!this.__size) {
      return null;
    }
    this.__size--;
    const value = this.storage[this.__size];
    delete this.storage[this.__size];
    return value;
  }

  peek() {
    return this.storage[this.__size - 1];
  }

  size() {
    return this.__size;
  }

  isEmpty() {
    return this.__size ? false : true;
  }
}
