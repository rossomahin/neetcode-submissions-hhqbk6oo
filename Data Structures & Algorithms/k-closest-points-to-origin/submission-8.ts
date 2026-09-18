/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const minHeap = new MinPriorityQueue((point) => point[0]);

        for (let [x, y] of points) {
            let distance = (Math.pow(x, 2) + Math.pow(y, 2));
            minHeap.enqueue([distance, x, y])
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            let [distance, x, y] = minHeap.dequeue();
            res.push([x, y])
        }

        return res;
    }
}
