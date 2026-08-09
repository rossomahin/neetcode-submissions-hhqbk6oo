class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];

        for (const token of tokens) {
            if ('+-*/'.includes(token)) {
                const b = stack.pop()!;
                const a = stack.pop()!;
                
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

                stack.push(res);

            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop();
    }
}
