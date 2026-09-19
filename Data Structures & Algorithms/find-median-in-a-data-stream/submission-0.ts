/**
* const { MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class MedianFinder {
    leftHeap: any;
    rightHeap: any;
    constructor() {
        this.leftHeap = new MaxPriorityQueue();
        this.rightHeap = new MinPriorityQueue();
    }
    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.leftHeap.enqueue(num);
        if (this.leftHeap.front() > this.rightHeap.front()) {
            this.rightHeap.enqueue(this.leftHeap.dequeue())
        }
        if (this.leftHeap.size() > this.rightHeap.size() + 1) {
            this.rightHeap.enqueue(this.leftHeap.dequeue())
        }
        else if (this.leftHeap.size() < this.rightHeap.size()) {
            this.leftHeap.enqueue(this.rightHeap.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.leftHeap.size() === this.rightHeap.size()) {
            return ((this.leftHeap.front() + this.rightHeap.front()) / 2);
        } else 
            return this.leftHeap.front();
    }
}
