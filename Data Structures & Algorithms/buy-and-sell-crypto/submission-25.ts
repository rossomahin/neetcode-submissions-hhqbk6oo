class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let maxP = 0;
        for (let right = 0; right < prices.length; right++) {
            let profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit);
            if (prices[right] < prices[left]) {
                left = right;
            }
        }
        return maxP;
    }
}
