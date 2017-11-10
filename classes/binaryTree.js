class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(value) {
    if (!this.left) {
      this.left = new BinaryTree(value);
    } else if (!this.right) {
      this.right = new BinaryTree(value);
    } else {
      this.left.addChild(value);
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left && this.left.contains(target)) {
      return true;
    }
    if (this.right && this.right.contains(target)) {
      return true;
    }
    return false;
  }

  traverseDF(cb) {
    cb(this.value);

    this.left && this.left.traverseDF(cb);
    this.right && this.right.traverseDF(cb);
  }

  traverseBF(cb) {
    const queue = [];
    let node;
    queue.push(this);

    while (queue.length) {
      node = queue.shift();
      cb(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

// Complete binary tree instance: every level filled except for final (rightmost) child
const binaryTreeComplete = new BinaryTree(1);
binaryTreeComplete.addChild(2);
binaryTreeComplete.addChild(3);
binaryTreeComplete.left.addChild(4);
binaryTreeComplete.left.addChild(5);
binaryTreeComplete.right.addChild(6);

// Incomplete binary tree instance: right child has no children
const binaryTreeIncomplete = new BinaryTree(1);
binaryTreeIncomplete.addChild(2);
binaryTreeIncomplete.addChild(3);
binaryTreeIncomplete.left.addChild(4);
binaryTreeIncomplete.left.addChild(5);

// Full binary tree instance: each node has 0 or 2 children
const binaryTreeFull = new BinaryTree(1);
binaryTreeFull.addChild(2);
binaryTreeFull.addChild(3);
binaryTreeFull.right.addChild(6);
binaryTreeFull.right.addChild(7);

// Not full binary tree instance: left child has only one child
const binaryTreeNotFull = new BinaryTree(1);
binaryTreeNotFull.addChild(2);
binaryTreeNotFull.addChild(3);
binaryTreeNotFull.left.addChild(4);
binaryTreeNotFull.right.addChild(6);
binaryTreeNotFull.right.addChild(7);

// Perfect binary tree instance: both full and complete
const binaryTreePerfect = new BinaryTree(1);
binaryTreePerfect.addChild(2);
binaryTreePerfect.addChild(3);
binaryTreePerfect.left.addChild(4);
binaryTreePerfect.left.addChild(5);
binaryTreePerfect.right.addChild(6);
binaryTreePerfect.right.addChild(7);

module.exports = {
  BinaryTree,
  binaryTreeComplete,
  binaryTreeIncomplete,
  binaryTreeFull,
  binaryTreeNotFull,
  binaryTreePerfect
};
