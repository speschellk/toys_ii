const { BinaryTree, binaryTreeComplete, binaryTreePerfect } = require('../binaryTree');

describe('Instantiation', () => {
  const binaryTree = new BinaryTree();

  test('BinaryTree is instantiated using the new keyword', () => {
    expect(binaryTree).toMatchSnapshot();
    expect(binaryTree).toBeInstanceOf(BinaryTree);
  });

  test('New binary tree has null left and right properties', () => {
    expect(binaryTree.left).toBeNull();
    expect(binaryTree.right).toBeNull();
  });

  test('BinaryTree class can be instantiated with a value', () => {
    const binaryTree = new BinaryTree(3);
    expect(binaryTree).toMatchSnapshot();
  });
});

describe('addChild method', () => {
  test('addChild method adds from left to right', () => {
    const child = new BinaryTree(8);
    binaryTreePerfect.addChild(8);
    expect(binaryTreePerfect.left.left.left).toMatchObject(child);
  });
});

describe('contains method', () => {
  test('contains method returns true for values contained in the tree', () => {
    expect(binaryTreeComplete.contains(5)).toBe(true);
  });

  test('contains method returns false for values not contained in the tree', () => {
    expect(binaryTreeComplete.contains(20)).toBe(false);
  });
});

describe('Traversal methods', () => {
  test('TraverseDF method calls a callback on each value', () => {
    const callback = jest.fn();
    binaryTreeComplete.traverseDF(callback);
    expect(callback).toHaveBeenCalledTimes(6);
  });

  test('TraverseDF traverses the binary tree in depth-first order', () => {
    const values = [];
    binaryTreeComplete.traverseDF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 4, 5, 3, 6]);
  });

  test('TraverseBF method calls a callback on each value', () => {
    const callback = jest.fn();
    binaryTreeComplete.traverseBF(callback);
    expect(callback).toHaveBeenCalledTimes(6);
  });

  test('TraverseBF method traverses the binary tree in breadth-first order', () => {
    const values = [];
    binaryTreeComplete.traverseBF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 3, 4, 5, 6]);
  });
});
