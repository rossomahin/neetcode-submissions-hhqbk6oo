class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closeToOpen: Record<string, string> = {
            ']': '[',
            '}': '{',
            ')': '('
        };

        const stack: string[] = [];

        for (const char of s) {
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
