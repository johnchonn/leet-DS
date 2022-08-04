// VALID PARENTHESES

const isValid = (s) => {
  let chars = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] == '{') {
          chars.push('}');
      } else if (s[i] == '[') {
          chars.push(']');
      } else if (s[i] == '(') {
          chars.push(')');
      }
      else if (chars.pop() !== s[i]) {
          return false;
      }
  }
  return !chars.length;
};