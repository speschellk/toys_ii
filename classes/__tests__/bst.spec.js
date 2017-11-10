const BST = require('../bst');

describe('Instantiation', () => {
  const bst = new BST();

  test('BST is instantiated using the new keyword', () => {
    expect(bst).toMatchSnapshot();
    expect(bst).toBeInstanceOf(BST);
  });

  test('New tree has null left and right properties', () => {
    expect(bst.left).toBeNull();
    expect(bst.right).toBeNull();
  });

  test('BST class can be instantiated with a value', () => {
    const bst = new BST(3);
    expect(bst).toMatchSnapshot();
  });
});

describe('insert method', () => {
  const bst = new BST(10);
  bst.insert()

  test('insert method adds smaller and equal values on the left', () => {

  });

  test('insert method adds greater values on the right', () => {});
});

describe('contains method', () => {
  const bst = new BST(10);

  test('contains method returns true for values contained in the tree', () => {});

  test('contains method returns false for values not contained in the tree', () => {});
});

describe.skip('Traversal methods', () => {
  const bst = new BST(1);

  test('TraverseDF method calls a callback on each value', () => {
    const callback = jest.fn();
    bst.traverseDF(callback);
    expect(callback).toHaveBeenCalledTimes(8);
  });

  test('TraverseDF traverses the tree in depth-first order', () => {
    const values = [];
    bst.traverseDF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 5, 6, 3, 4, 7, 8]);
  });

  test('TraverseBF method calls a callback on each value', () => {
    const callback = jest.fn();
    bst.traverseBF(callback);
    expect(callback).toHaveBeenCalledTimes(8);
  });

  test('TraverseBF method traverses the tree in breadth-first order', () => {
    const values = [];
    bst.traverseBF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
