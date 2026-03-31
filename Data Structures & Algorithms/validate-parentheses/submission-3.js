class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 1 
            || s.startsWith(']')
            || s.startsWith('}')
            || s.startsWith(')')) return false

        const closeToOpen = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

       const stack = [];

       for (let b of s) {
        if (closeToOpen[b]) {
            if (
                stack.length > 0 &&
                stack[stack.length - 1] === closeToOpen[b]
            ) {
                stack.pop();
            } else {
                return false
            }
        } else {
            stack.push(b)
        }
       }
        return stack.length === 0;
    }
}
