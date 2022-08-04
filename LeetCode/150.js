// EVALUATE REVERSE POLISH NOTATION

const evalRPN = (tokens) => {
  const stack = [];
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
    
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        num1 = stack.pop();
        num2 = stack.pop();
        stack.push(num2 - num1);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        num1 = stack.pop();
        num2 = stack.pop();
        num3 = num2 / num1;
        stack.push(num3 > 0 ? Math.floor(num3) : Math.ceil(num3));
        break;
      default:
        stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};