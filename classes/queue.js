module.exports = class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end++] = value;
  }

  dequeue() {
    if (!this.size()) {
      return null;
    }
    const value = this.storage[this.start];
    delete this.storage[this.start++];
    return value;
  }

  peek() {
    return this.storage[this.start];
  }

  size() {
    return Math.max(this.end - this.start, 0);
  }

  isEmpty() {
    return this.size() ? false : true;
  }
}
