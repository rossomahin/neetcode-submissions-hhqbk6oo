class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        
        for (let i = 0; i < tokens.length; i++) {
            if (
                '+-*/'.includes(tokens[i])
            ) {
                let b = Number(stack.pop());
                let a = Number(stack.pop());
                let res;

                if (tokens[i] === '+') res = a + b;
                else if (tokens[i] === '-') res = a - b;
                else if (tokens[i] === '*') res = a * b;
                else if (tokens[i] === '/') res = Math.trunc(a / b);

                stack.push(res);
                
            } else {
                stack.push(tokens[i])
            }
        }
        return Number(stack.pop());
    }
}
