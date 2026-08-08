class MinStack {
stack: number[];
minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack[this.stack.length] = val;
        let currentVal = this.minStack.length === 0 ? 
            val : Math.min(val, this.minStack[this.minStack.length - 1]);
        this.minStack[this.minStack.length] = currentVal;
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length > 0) {
            this.stack.length = this.stack.length - 1;
             this.minStack.length = this.minStack.length - 1;
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
