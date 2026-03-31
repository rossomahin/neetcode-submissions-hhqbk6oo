class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (let c of operations) {
            if ('+CD'.includes(c)) {
                if (c === '+') {
                    let b = Number(stack[stack.length - 1]);
                    let a = Number(stack[stack.length - 2]);

                    let res = a + b;
                    stack.push(res);
                } else if (c === 'C') {
                    stack.pop();
                } else {
                    let double = 2 * Number(stack[stack.length - 1]);
                    stack.push(double)
                }
            } else {
                stack.push(c)
            }
        }
        let res = 0;
        while (stack.length > 0) {
            res += Number(stack.pop());
        }
        return res;
    }
}
