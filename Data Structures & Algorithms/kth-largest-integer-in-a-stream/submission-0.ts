// class HeapNode {
//     value: number
//     constructor(value: number) {
//         this.value = value;
//     }
// }

class MinHeap {
    heap: number[]
    constructor() {
        this.heap = [];
    }
    push(value: number) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let i = this.heap.length - 1
        let parent = Math.floor((i - 1) / 2);
        while (i > 0 && this.heap[i] < this.heap[parent]) {
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
            parent = Math.floor((i - 1) / 2);
        }
    }
    pop() {
        let min = this.heap[0];
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        this.heap.length -= 1;

        this.bubbleDown();
    }

    bubbleDown() {
        let i = 0;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        while (left < this.heap.length) {
            let smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smallest = right;
            }
            if (this.heap[i] > this.heap[smallest]) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
                i = smallest;
            } else {
                break;
            }

            left = 2 * i + 1;
            right = 2 * i + 2;
        }
    }

    get size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    heap: MinHeap
    k:number
    nums: number[]
    constructor(k: number, nums: number[]) {
        this.heap = new MinHeap();
        this.k = k;
        this.nums = nums;

        for (let num of this.nums) {
            this.heap.push(num);
            if (this.heap.size > k) {
                this.heap.pop();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val);
        if (this.heap.size > this.k) {
            this.heap.pop()
        }
        return this.heap.peek();
    }
}
