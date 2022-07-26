class TrieNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  getWord() {
    let output = [];
    let node = this;

    while(node !== null) {
      output.unshift(node.value);
      node = node.parent;
    }
    return output.join("");
  };
};

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  // ADD A WORD
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  };

  // SEARCH FOR A WORD
  wordSearch(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }

    return node.end;
  };

  // SEARCH FOR WORDS WITH A PREFIX
  prefixSearch(prefix) {
    let node = this.root;
    let output = [];

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }

    // RECURSION
    this.#findWords(node, output);

    return output;
  };

  // RECURSION HELPER FUNCTION TO FIND ALL WORDS
  #findWords(node, array) {
    if (node.end) {
      array.unshift(node.getWord());
    }

    for (let child in node.children) {
      this.#findWords(node.children[child], array);
    }
  };
};

const trie = new Trie();

// ADD OPERATIONS
trie.insert("me");
trie.insert("met");
trie.insert("meow");
trie.insert("mew");
trie.insert("do");
trie.insert("dog");
trie.insert("dodge");
trie.insert("doctor");

const inputs = [
  "me",
  "met",
  "meow",
  "mew",
  "do",
  "dog",
  "dodge",
  "doctor",
].map(str => trie.wordSearch(str))

console.log(inputs)

// console.log(trie);

// WORD SEARCH OPERATIONS
// console.log(trie.wordSearch("dog"));
// console.log(trie.wordSearch("find"));

// PREFIX SEARCH OPERATIONS
// console.log(trie.prefixSearch("do"));
// console.log(trie.prefixSearch("me"));