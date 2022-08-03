// CLONE GRAPH

const cloneGraph = (node) => {
  if (node === null) {
      return node;
  }
  
  const nodesVisited = new Map();
  const queue = [];
  const nodeCopy = new Node(node.val);
  queue.push(node);
  nodesVisited.set(node, nodeCopy);
  
  while (queue.length !== 0) {
      const oldNode = queue.shift();

      for (const prev of oldNode.neighbors) {
          if (!nodesVisited.has(prev)) {
              queue.push(prev);
              nodesVisited.set(prev, new Node(prev.val));
          } 
          nodesVisited.get(oldNode).neighbors.push(nodesVisited.get(prev));
      }
  }
  return nodeCopy;
};
