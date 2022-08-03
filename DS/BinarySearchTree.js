// TREE NODE
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BINARY SEARCH TREE
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // ADD A VALUE
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while(current) {
      if (value === current.value) {
        return undefined;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // SEARCH FOR A VALUE (BOOLEAN)
  has(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    let selected = null;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        selected = current;
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return found;
  }
}

const bts = new BinarySearchTree();

// ADD OPERATIONS
bts.insert(3);
bts.insert(4);
bts.insert(10);
bts.insert(8);
bts.insert(5);
bts.insert(2);
bts.insert(9);
bts.insert(15);
bts.insert(20);
bts.insert(1);
bts.insert(7);
bts.insert(11);
bts.insert(20);
bts.insert(12);

// SEARCH OPERATIONS
console.log(bts.has(9));