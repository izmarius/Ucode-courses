function BinaryTree() {
  this.root = null;

  let Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  };

  this.add = (data) => {
    if (this.search(data)) {
      return null;
    }
    this.root = this.addNode(this.root, data);
  };

  this.search = (data) => {
    return this.searchNode(this.root, data);
  };

  this.addNode = (node, data) => {
    if (node === null) {
      node = new Node(data);
    } else {
      if (data < node.data) {
        node.left = this.addNode(node.left, data);
      } else {
        node.right = this.addNode(node.right, data);
      }
    }
    return node;
  };

  this.searchNode = (node, data) => {
    if (node === null) {
      return false;
    }

    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else if (data !== node.data) {
      return false;
    }
    return true;
  };
}

let tree1 = new BinaryTree();
tree1.add(8);
tree1.add(20);
tree1.add(7);
tree1.add(23);
tree1.add(5);
tree1.add(18);
tree1.add(6);
tree1.add(8);
tree1.add(2);

console.log(tree1);
console.log(tree1.search(8));
