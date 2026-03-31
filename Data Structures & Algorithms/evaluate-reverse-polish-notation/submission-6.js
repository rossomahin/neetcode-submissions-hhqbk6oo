class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let t of tokens) {
            if ('+-*/'.includes(t)) {
                let b = Number(stack.pop());
                let a = Number(stack.pop());

                let res;

                if (t === '+') res = a + b;
                else if (t === '-') res = a - b;
                else if (t === '*') res = a * b;
                else if (t === '/') res = Math.trunc(a / b);
                stack.push(res);
            } else {
                stack.push(t)
            }
        }
        return Number(stack.pop());
    }
}
