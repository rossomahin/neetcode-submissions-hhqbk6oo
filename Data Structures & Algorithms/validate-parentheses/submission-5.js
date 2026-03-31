class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // Space = O(s), where s - length of string
    isValid(s) {
        // condition == O(1) 
        if (s.length === 1
            || s.startsWith(')')
            || s.startsWith('}')
            || s.startsWith(']') 
        ) return false

        let stack = [];
        let closeToOpen = {
            ')' : '(',
            ']' : '[',
            '}' : '{',
        }

        // O(n), where n - length characters of string
        for (let c of s) {
            if (closeToOpen[c]) {
                if (
                    stack.length &&
                    stack[stack.length - 1] === closeToOpen[c]
                ) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
            
        }
        return stack.length === 0
    }
}
