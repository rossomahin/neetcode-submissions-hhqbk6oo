/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const count = new Map();
        for (const task of tasks) {
            count.set(task, (count.get(task) || 0) + 1);
        }

        const maxHeap = new MaxPriorityQueue();

        for (let [task, val] of count) {
            maxHeap.enqueue(val)
        }

        const cdQueue = [];
        let time = 0;
        while (maxHeap.size() > 0 || cdQueue.length > 0) {
            if (maxHeap.size() > 0) {
                const val = maxHeap.dequeue();
                if (val - 1 > 0) { cdQueue.push([val - 1, time + n +  1]); }
            }
            time++;
            if (cdQueue.length > 0 && cdQueue[0][1] <= time) {
                maxHeap.enqueue(cdQueue.shift()[0])
            }
        }
        return time;
    }
}
