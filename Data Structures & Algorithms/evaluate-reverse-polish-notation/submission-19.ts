class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        for (const t of tokens) {
            if ('+-*/'.includes(t)) {
                let b = stack.pop()!;
                let a = stack.pop()!;

                let res = 0;

                switch (t) {
                    case '+': {
                        res = a + b;
                        break;
                    }
                    case '-': {
                        res = a - b;
                        break;
                    }
                    case '*': {
                        res = a * b;
                        break;
                    }
                    case '/': {
                        res = Math.trunc(a / b);
                        break;
                    }
                    default: {
                        break;
                    }
                }
                stack.push(res);
            } else {
                stack.push(Number(t));
            }
        }
        return stack.pop()!;
    }
}
