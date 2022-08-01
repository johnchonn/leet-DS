// KTH LARGEST

class Heap {
  constructor(nums) {
    this.trie = nums;
    this.size = nums.length;
  }

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

  parent(index) {
    return this.trie[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.trie[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.trie[this.rightChildIndex(index)];
  }
  
  moveNodes(index1, index2) {
    let current = this.trie[index1];
    this.trie[index1] = this.trie[index2];
    this.trie[index2] = current;
  }

  insertion(data) {
    this.trie[this.size] = data;
    this.size += 1;
    this.up();
  }

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

  up() {
    let index = this.size - 1;

    while(this.parentPresent(index) && this.parent(index) > this.trie[index]) {
      this.moveNodes(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

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
}

class KthLargest {
    constructor(k, nums) {
        nums = nums.sort((a, b) => a - b);
        const heap = new Heap(nums);

    while (heap.trie.length > k) {
        heap.deletion();
    }
        this.nums = nums
        this.heap = heap
        this.k = k
  }


add(value) {
    if (this.heap.trie.length < this.k) {
    this.heap.insertion(value)
    return this.heap.trie[0]
  }
    
  const min = this.heap.trie[0];
    
  if (value <= min) {
    return min
  }
  this.heap.deletion();
  this.heap.insertion(value);
  return this.heap.trie[0];
  }
}

// const kth = new KthLargest();
