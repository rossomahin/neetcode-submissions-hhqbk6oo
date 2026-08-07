class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closeToOpen = {
            ']': '[',
            '}': '{',
            ')': '('
        };

        const stack = [];
        for (let c of s) {
            if (
                stack.length && closeToOpen[c] === stack[stack.length - 1]
                ) {
                    stack.pop();
                }
            else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
