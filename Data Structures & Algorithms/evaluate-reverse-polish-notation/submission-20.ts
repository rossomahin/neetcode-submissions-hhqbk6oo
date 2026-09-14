class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        for (let t of tokens) {
            if ('+-*/'.includes(t)) {
                let y = stack.pop();
                let x = stack.pop();
                
                let res = 0;

                switch (t) {
                    case '+': {
                        res = x + y;
                        break;
                    } case '-': {
                        res = x - y;
                        break;
                    } case '*': {
                        res = x * y;
                        break;
                    } case '/': {
                        res = Math.trunc(x / y);
                        break;
                    } default: break;
                }
                stack.push(res);
            } else {
                stack.push(Number(t))
            }
        }

        return stack.pop();
    }
}
