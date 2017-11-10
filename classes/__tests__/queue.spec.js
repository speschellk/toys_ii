const Queue = require('../queue');

test('New queue instance has size 0', () => {
  const queue = new Queue();
  expect(queue.size()).toEqual(0);
});

test('Enqueue adds a value to the end of the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.storage[2]).toEqual(3);
  expect(queue.storage[1]).toEqual(2);
  expect(queue.storage[0]).toEqual(1);
});

test('Dequeue returns the value at the front of the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toEqual(1);
});

test('Dequeue returns null if the queue is empty', () => {
  const queue = new Queue();
  expect(queue.dequeue()).toBeNull();
});

test('Peek method displays the next value to be dequeued', () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.peek()).toEqual(1);

  queue.enqueue(2);
  expect(queue.peek()).toEqual(1);

  queue.dequeue();
  expect(queue.peek()).toEqual(2);
});

test('Queue size describes the number of elements in the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.size()).toEqual(1);

  queue.enqueue(2);
  expect(queue.size()).toEqual(2);

  queue.dequeue();
  expect(queue.size()).toEqual(1);

  queue.dequeue();
  expect(queue.size()).toEqual(0);
});

test('isEmpty returns false when there are elements in the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.isEmpty()).toEqual(false);

  queue.dequeue();
  expect(queue.isEmpty()).toEqual(true);
});
