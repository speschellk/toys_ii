const { BST, bst, bstFull, bstComplete, bstPerfect } = require('../bst');

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

  test('insert method adds smaller and equal values on the left', () => {
    bst.insert(1);
    bst.insert(1);
    expect(bst.left.left.left.value).toEqual(1);
    expect(bst.left.left.left.left.value).toEqual(1);
  });

  test('insert method adds greater values on the right', () => {
    bst.insert(40);
    expect(bst.right.right.value).toEqual(40);
  });
});

describe('contains method', () => {

  test('contains method returns true for values contained in the tree', () => {
    expect(bst.contains(7)).toEqual(true);
  });

  test('contains method returns false for values not contained in the tree', () => {
    expect(bst.contains(50)).toEqual(false);
  });
});

describe('Traversal methods', () => {

  test('TraverseDF method calls a callback on each value', () => {
    const callback = jest.fn();
    bstPerfect.traverseDF(callback);
    expect(callback).toHaveBeenCalledTimes(7);
  });

  test('TraverseDF traverses the tree in depth-first order', () => {
    const values = [];
    bstPerfect.traverseDF(val => values.push(val));
    expect(values).toMatchObject([10, 5, 3, 8, 20, 15, 25]);
  });

  test('TraverseBF method calls a callback on each value', () => {
    const callback = jest.fn();
    bstPerfect.traverseBF(callback);
    expect(callback).toHaveBeenCalledTimes(7);
  });

  test('TraverseBF method traverses the tree in breadth-first order', () => {
    const values = [];
    bstPerfect.traverseBF(val => values.push(val));
    expect(values).toMatchObject([10, 5, 20, 3, 8, 15, 25]);
  });
});
