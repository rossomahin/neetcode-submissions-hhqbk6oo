class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                let b = stack.pop();
                let a = stack.pop();

                switch (token) {
                    case '+':
                        stack.push(a + b); break;
                    case '-':
                        stack.push(a - b); break;
                    case '*':
                        stack.push(a * b); break;
                    case '/':
                        stack.push(Math.trunc(a / b)); break;
                    default:
                        console.log('No operations')
                }
            } else {
                stack.push(parseInt(token))
            }
        }
        return stack.pop();
    }
}