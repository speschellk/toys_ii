module.exports = class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  traverseDF(cb) {
    cb(this.value);

    for (let i = 0; i < this.children.length; i++) {
      this.children[i].traverseDF(cb);
    }
  }

  traverseBF(cb) {
    const queue = [];
    let node;
    queue.push(this);

    while (queue.length) {
      node = queue.shift();
      cb(node.value);

      for (let i = 0; node.children && i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
  }
};
