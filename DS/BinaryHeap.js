
// BINARY HEAP

// NOTES
/* 
index of parent node: take the floor of the index minus 1 divided by 2.
index of left child node: 2 times the index plus 1.
index of the right child node: 2 times the index plus 2.
root index will always be 0.
*/


// MIN-HEAP (non-recursive)
class MinHeap {
  constructor() {
    this.trie = [];
    this.size = 0;
  }

  // HELPER FUNCTIONS
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  parentPresent(index) {
    return this.parentIndex(index) >= 0;
  }

  leftChildPresent(index) {
    return this.leftChildIndex(index) < this.size;
  }

  rightChildPresent(index) {
    return this.rightChildIndex(index) < this.size;
  }

  // LOCATING OUR NODES
  parent(index) {
    return this.trie[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.trie[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.trie[this.rightChildIndex(index)];
  }

  // REPOSITIONING OUR NODES
  moveNodes(index1, index2) {
    let current = this.trie[index1];
    this.trie[index1] = this.trie[index2];
    this.trie[index2] = current;
  }

  // ADDING A NODE (push)
  insertion(data) {
    this.trie[this.size] = data;
    this.size += 1;
    this.up();
  }

  // REMOVING A NODE (pop)
  deletion() {
    if (this.size === 0) {
      console.log('trie is empty');
    }

    let data = this.trie[0];
    this.trie[0] = this.trie[this.size - 1];
    this.trie.pop();
    this.size -= 1;
    this.down();

    return data;
  }

  // MOVE NODES UPWARDS
  // min version
  up() {
    let index = this.size - 1;

    while(this.parentPresent(index) && this.parent(index) > this.trie[index]) {
      this.moveNodes(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  // max version
  up() {
    let index = this.size - 1;

    while(this.trie[index] > this.trie[this.parentIndex(index)]) {
      this.moveNodes(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  // MOVE NODES DOWNWARDS
  // min version
  down() {
    let index = 0;

    while(this.leftChildPresent(index)) {
      let childIndex = this.leftChildIndex(index);
      
      if (this.rightChildPresent(index) && this.rightChild(index) < this.leftChild(index)) {
        childIndex = this.rightChildIndex(index);
      }

      if (this.trie[index] < this.trie[childIndex]) {
        break;
      } else {
        this.moveNodes(index, childIndex);
        index = childIndex;
      }
    }
  }

  // max version
  down() {
    let index = 0;

    while(this.trie[this.leftChildIndex(index)] !== undefined) {
      let childIndex = this.leftChildIndex(index);

      if(this.trie[this.rightChildIndex(index)] !== undefined && this.trie[this.rightChildIndex(index)] > this.trie[this.leftChildIndex(index)]) {
        childIndex = this.rightChildIndex(index);
      }

      if (this.trie[index] < this.trie[childIndex]) {
        this.moveNodes(index, childIndex);
      } else {
        return;
      }
    }
  }
}

const heap = new MinHeap();

// INSERT OPERATIONS (1)
heap.insertion(1);
heap.insertion(2);
heap.insertion(3);
heap.insertion(4);
heap.insertion(5);
heap.insertion(6);

// INSERT OPERATIONS (2)
heap.insertion(2);
heap.insertion(5);
heap.insertion(30);
heap.insertion(15);
heap.insertion(7);
heap.insertion(12);

// DELETE OPERATIONS
heap.deletion();
heap.deletion();
heap.deletion();
heap.deletion();
heap.deletion();
heap.deletion();


// console.log(heap);