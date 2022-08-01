// IMPLEMENT TRIE (PREFIX TREE)

class Trie {
  constructor() {
      this.root = {};
  this.end = false;
  }
  
  insert(word) {
  let trieNode = this.root;
  for(const char of word) {
      if (trieNode[char] === undefined) trieNode[char] = {};
      trieNode = trieNode[char]
  }
  trieNode.end = true;
};

  search(word) {
   let trieNode = this.root;
  for(const char of word) {
      if(!trieNode[char]) {
          return false;
      } else {
          trieNode = trieNode[char];
      }
  }

  return trieNode && trieNode.end === true;
};

  startsWith(prefix) {
  let trieNode = this.root;
  for(const char of prefix) {
      if(!trieNode[char]) {
          return false;
      } else {
          trieNode = trieNode[char];
      }
  }
  return true;
};
};

const trie = new Trie();