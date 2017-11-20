/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.

I: unsorted linked list (node?), potentially with duplicates
O: same linked list, with duplicates removed
C: temporary buffer not allowed
E: no input, no duplicates, all duplicates (leave just one)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail.next = node;
    }
    this.tail = node;
  }

  removeHead() {
    if (!this.head) return null;
    let currentHead = this.head;
    this.head.next = this.head;
    return currentHead;
  }

  peek() {
    return this.head;
  }
}

const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(2);
list.addToTail(4);
list.addToTail(5);
list.addToTail(5);
list.addToTail(1);

function removeDups(list) {
  const linkSet = new Set();
  let node = list.head;
  let prevNode = null;

  while (node) {
    if (!linkSet.has(node.value)) {
      linkSet.add(node.value);
      prevNode = node;
    } else {
      if (Object.is(node, list.tail)) {
        list.tail = prevNode;
        list.tail.next = null;
      } else {
        prevNode.next = node.next;
      }
    }
    node = node.next;
  }
  return list;
}

console.log(list)
console.log(removeDups(list))
