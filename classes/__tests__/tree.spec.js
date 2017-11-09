const Tree = require('../tree');

describe('Instantiation', () => {
  const tree = new Tree();

  test('Tree is instantiated using the new keyword', () => {
    expect(tree).toMatchSnapshot();
    expect(tree).toBeInstanceOf(Tree);
  });

  test('New tree has an empty children array', () => {
    expect(tree.children).toMatchObject([]);
    expect(tree.children).toHaveLength(0);
  });

  test('Tree instance can be instantiated with a value', () => {
    const tree = new Tree(3);
    expect(tree).toMatchSnapshot();
  });
});

describe('addChild method', () => {
  const tree = new Tree(4);
  const child = new Tree(5);
  const grandchild = new Tree(7);
  tree.addChild(5);
  tree.addChild(6);
  tree.children[1].addChild(7);

  test("addChild method adds a tree to the parent's children array", () => {
    expect(tree.children).toContainEqual(child);
    expect(tree.children[1].children).toContainEqual(grandchild);
  });
});

describe('Traversal methods', () => {
  const tree = new Tree(1);
  tree.addChild(2);
  tree.addChild(3);
  tree.addChild(4);
  tree.children[0].addChild(5);
  tree.children[0].addChild(6);
  tree.children[2].addChild(7);
  tree.children[2].children[0].addChild(8);

  test('TraverseDF method calls a callback on each value', () => {
    const callback = jest.fn();
    tree.traverseDF(callback);
    expect(callback).toHaveBeenCalledTimes(8);
  });

  test('TraverseDF traverses the tree in depth-first order', () => {
    const values = [];
    tree.traverseDF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 5, 6, 3, 4, 7, 8]);
  });

  test('TraverseBF method calls a callback on each value', () => {
    const callback = jest.fn();
    tree.traverseBF(callback);
    expect(callback).toHaveBeenCalledTimes(8);
  });

  test('TraverseBF method traverses the tree in breadth-first order', () => {
    const values = [];
    tree.traverseBF(val => values.push(val));
    expect(values).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
