/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const minHeap = new MinPriorityQueue();

        for (let num of nums) {
            minHeap.enqueue(num);

            while (minHeap.size() > k) {
                minHeap.dequeue();
            }
        }

        return minHeap.dequeue();
    }
}
