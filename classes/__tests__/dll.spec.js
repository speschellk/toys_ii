const DoublyLinkedList = require('../dll');

describe('Head and tail properties', () => {
  test('New DoublyLinkedList instance has null head and tail', () => {
    const list = new DoublyLinkedList();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});

describe('addToTail method', () => {
  const list = new DoublyLinkedList();
  list.addToTail(1);

  test('Adds node to end of list', () => {
    expect(list.tail.value).toEqual(1);
  });

  test('Sets head and tail to first node added', () => {
    expect(list.head).toMatchObject(list.tail);
  });

  test('Does not alter head if list contains at least one node', () => {
    list.addToTail(2);
    expect(list.head.value).toEqual(1);
  });
});

describe('removeHead method', () => {
  const list = new DoublyLinkedList();

  test('Returns null when list is empty', () => {
    expect(list.removeHead()).toBeNull();
  });

  test('Removes head from list when at least one node in list', () => {
    list.addToTail(1);
    expect(list.removeHead().value).toEqual(1);
  });

  test('Sets head to next node in list', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.removeHead();
    expect(list.head.value).toEqual(2);
  });

  test('Sets next node\s prev property to null', () => {
    const list = new DoublyLinkedList();
    list.addToTail(1);
    list.addToTail(2);
    expect(list.head.next.prev.value).toEqual(1);

    list.removeHead();
    expect(list.head.prev).toBeNull();
  });

  test('Does not alter tail property when more than one node in list', () => {
    list.addToTail(1);
    list.addToTail(2);
    list.removeHead();
    expect(list.tail.value).toEqual(2);
  });
});

describe('contains method', () => {
  const list = new DoublyLinkedList();
  list.addToTail(1);
  list.addToTail(2);
  list.addToTail(3);

  test('Returns true when the list contains the target value', () => {
    expect(list.contains(1)).toEqual(true);
    expect(list.contains(3)).toEqual(true);
  });

  test('Returns false when the list does not contain the target value', () => {
    expect(list.contains(10)).toEqual(false);
    expect(list.contains(-3)).toEqual(false);
  });

  test('Does not alter original list', () => {
    expect(list.head.value).toEqual(1);
    expect(list.tail.value).toEqual(3);
  });
});

describe('isEmpty method', () => {
  const list = new DoublyLinkedList();

  test('Returns true when list is empty', () => {
    expect(list.isEmpty()).toEqual(true);
  });

  test('Returns false when list contains at least one node', () => {
    list.addToTail(1);
    expect(list.isEmpty()).toEqual(false);
  });
});
