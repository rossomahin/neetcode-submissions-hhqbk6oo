class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (let token of tokens) {
            if ('+-*/'.includes(token)) {
                let b = Number(stack.pop()), a = Number(stack.pop());
                let res;
                
                switch (token) {
                    case '+': {
                        res = a + b;
                        break;
                    } case '-': {
                        res = a - b;
                        break;
                    } case '*': {
                        res = a * b;
                        break;
                    } case '/': {
                        res = Math.trunc(a / b)
                        break;
                    } default: {
                        break;
                    }
                }
                stack.push(res)
            } else {
                stack.push(token)
            }
        }
        return stack.pop();
    }
}
