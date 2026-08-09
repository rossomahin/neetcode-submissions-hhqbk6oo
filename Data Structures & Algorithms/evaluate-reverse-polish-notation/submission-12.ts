class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            if ('+-*/'.includes(token)) {
                const b: number = stack.pop();
                const a: number = stack.pop();
                
                let res: number = 0;

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
                        res = Math.trunc(a / b);
                        break;
                    } default: {
                        break;
                    }
                }

                stack.push(Number(res));

            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop();
    }
}
