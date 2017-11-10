const Stack = require('../stack');

test('New stack instance has size 0', () => {
  const stack = new Stack();
  expect(stack.size()).toEqual(0);
});

test('Push adds a value to the top of the stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.storage[2]).toEqual(3);
  expect(stack.storage[1]).toEqual(2);
  expect(stack.storage[0]).toEqual(1);
});

test('Pop returns the value at the top of the stack', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toEqual(3);
});

test('Pop returns null if the stack is empty', () => {
  const stack = new Stack();
  expect(stack.pop()).toBeNull();
});

test('Peek method displays the next value to be popped', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.peek()).toEqual(1);

  stack.push(2);
  expect(stack.peek()).toEqual(2);

  stack.pop();
  expect(stack.peek()).toEqual(1);
});

test('Stack size describes the number of elements in the stack', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.size()).toEqual(1);

  stack.push(2);
  expect(stack.size()).toEqual(2);

  stack.pop();
  expect(stack.size()).toEqual(1);

  stack.pop();
  expect(stack.size()).toEqual(0);
});

test('isEmpty returns false when there are elements in the stack', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.isEmpty()).toEqual(false);

  stack.pop();
  expect(stack.isEmpty()).toEqual(true);
});
