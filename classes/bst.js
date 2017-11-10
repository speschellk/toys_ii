module.exports = class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value);
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

      if (this.left) {
        queue.push(this.left);
      }
      if (this.right) {
        queue.push(this.right);
      }
    }
  }
};
