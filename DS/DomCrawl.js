// CCN LITE DOM CRAWL

// DEPTH FIRST SEARCH (non-recursive)
function depthFirstSearch(root = this.document.children[0]) {
  let nodes = [];
  let stack = [root];
    while (stack.length !== 0) {
      const item = stack.pop();
      nodes.push(item);
      const children = item.children;
        for (let i = children.length - 1; i >= 0; i--)
          stack.push(children[i]);
    }

  return nodes;
  // console.log(nodes);
}

// BREADTH FIRST SEARCH (non-recursive)
function breadthFirstSearch(root = this.document.children[0]) {
  let nodes = [];
  let queue = [root];

    while(queue.length !== 0) {
      const item = queue.shift();
      nodes.push(item);
      const children = item.children;
        for (let i = 0; i < children.length; i++) {
          queue.push(children[i]);
        }
    }

    return nodes;
    // console.log(nodes);
}