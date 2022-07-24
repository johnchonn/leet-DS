class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // ADDING A NODE
  addNode(value) {
    const newNode = new Node(value);

    if (this.length <= 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }

    this.head = newNode;

    this.length++;

    return newNode;
  }


  // DELETING A NODE
  deleteNode() {
    if (this.length <= 0) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;

      this.length--;

      if (this.length <= 0) {
        this.tail = null;
      }

      return nodeToRemove;
    }
  }

  // FINDING A NODE BY INDEX
  getNode(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let currentNode = this.head;
      let count = 0;

      while (count < index) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    }
  }

  // REVERSING LIST
  reverse(head) {
    let previous = null;
    let current = head;
    let next = head;

    while(current !== null) {
      next = next.next
      current.next = previous
      previous = current
      current = next
    }
    return previous;
  }
}


const newLinkedList = new LinkedList();

// ADDING NODES OPERATION
newLinkedList.addNode("1");
newLinkedList.addNode("2");
newLinkedList.addNode("3");
newLinkedList.addNode("4");

// ITERATE FORWARDS OPERATION
let currentNode = newLinkedList.head;

while(currentNode !== null) {
  console.log(currentNode);
  currentNode = currentNode.next;
}

// ITERATE BACKWARDS OPERATION
let reversedNode = newLinkedList.reverse(newLinkedList.head);

while(reversedNode !== null) {
  console.log(reversedNode);
  reversedNode = reversedNode.next;
}

// DELETING A NODE OPERATION
newLinkedList.deleteNode();
newLinkedList.deleteNode();
