class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const closeToOpen: Record<string, string> = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        const stack: string[] = [];

        for (const c of s) {
            if (
                stack.length && closeToOpen[c] === stack[stack.length - 1]
            ) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
