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

        const stack: string[] = [];

        for (let char of s) {
            if (
                stack.length && closeToOpen[char] === stack[stack.length - 1]
            ) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
