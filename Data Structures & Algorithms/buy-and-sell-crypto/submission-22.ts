class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxP = 0;
        let left = 0;
        for (let right = 0; right < prices.length; right++) {
            let currentP = prices[right] - prices[left];
            if (prices[right] > prices[left]) {
                if (maxP < currentP) {
                    maxP = currentP;
                }
            } else {
                left = right;
            }
        }
        return maxP
    }
}
