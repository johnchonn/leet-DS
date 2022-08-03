// VALIDATE BINARY SEARCH TREE

const isValidBST = (root) => {
  const preVal = -Infinity;
  let stack = [];
  
  while (root !== null || stack.length !== 0) {
      while (root !== null) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      if (root.val <= preVal) return false;
      preVal = root.val;
      root = root.right;
  }
  return true;
};