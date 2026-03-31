class MinStack {
    constructor(stack, minStack) {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.stack.length] = val;
        if (this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack[this.minStack.length] = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return null

        const top = this.stack[this.stack.length - 1]
        this.stack.length--

        if (top === this.minStack[this.minStack.length - 1]) {
            this.minStack.length--
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) return null
        return this.minStack[this.minStack.length - 1];
    }
}
