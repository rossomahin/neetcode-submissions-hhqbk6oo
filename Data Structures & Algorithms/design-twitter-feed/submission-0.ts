/**
* const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
*/

class Twitter {
    postedTweet: Map<number, number[][]>
    follows: Map<number, Set<number>>
    time: number
    constructor() {
        this.postedTweet = new Map();
        this.follows = new Map()
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        if (!this.postedTweet.has(userId)) this.postedTweet.set(userId, [])
        this.postedTweet.get(userId).push([this.time, tweetId])
        this.time++;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        const maxHeap = new MaxPriorityQueue((item) => item[0]);
        const users = new Set([userId]);
        if (this.follows.has(userId)) {
            for (const followeeId of this.follows.get(userId)) {
                users.add(followeeId);
            }
        }

        for (const id of users) {
            if (this.postedTweet.has(id)) {
                for (const [time, tweetId] of this.postedTweet.get(id)) {
                    maxHeap.enqueue([time, tweetId], time)
                }
            }
        }

        const res = []
        for (let i = 0; i < 10; i++) {
            if (maxHeap.size() >= 1) {
                res.push(maxHeap.dequeue()[1]);
            }
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        if (!this.follows.has(followerId)) this.follows.set(followerId, new Set());
        this.follows.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        if (this.follows.size > 0) {
            this.follows.get(followerId).delete(followeeId);
        }
    }
}
