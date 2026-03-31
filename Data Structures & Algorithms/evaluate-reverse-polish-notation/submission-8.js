class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let t of tokens) {
            if ('+-*/'.includes(t)) {
                let b = Number(stack.pop());
                let a = Number(stack.pop());

                let res;

                switch (t) {
                    case '+': {
                        res = a + b;
                        stack.push(res);
                        break;
                    }
                    case '-': {
                        res = a - b;
                        stack.push(res);
                        break;
                    }
                    case '*': {
                        res = a * b;
                        stack.push(res);
                        break;
                    }
                    case '/': {
                        res = Math.trunc(a / b);
                        stack.push(res);
                        break;
                    }
                }
            } else {
                stack.push(t)
            }
        }
        return Number(stack.pop());
    }
}
