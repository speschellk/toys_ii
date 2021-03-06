class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
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

// Binary search tree instance
const bst = new BST(10);
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(20);

// Full binary search tree instance
const bstFull = new BST(10);
bstFull.insert(5);
bstFull.insert(20);
bstFull.insert(15);
bstFull.insert(25);

// Complete binary search tree instance
const bstComplete = new BST(10);
bstComplete.insert(5);
bstComplete.insert(3);
bstComplete.insert(8);
bstComplete.insert(20);
bstComplete.insert(15);

// Perfect binary search tree instance
const bstPerfect = new BST(10);
bstPerfect.insert(5);
bstPerfect.insert(3);
bstPerfect.insert(8);
bstPerfect.insert(20);
bstPerfect.insert(15);
bstPerfect.insert(25);

module.exports = { BST, bst, bstFull, bstComplete, bstPerfect };
