class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

module.exports = class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    let currentHead = this.head;
    if (this.head.next) {
      this.head.next.prev = null;
    }
    this.head = this.head.next;
    return currentHead;
  }

  contains(target) {
    let node = this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  isEmpty() {
    return this.head ? false : true;
  }
}
