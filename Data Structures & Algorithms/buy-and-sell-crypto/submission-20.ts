class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let left = 0;
        for (let right = 0; right < prices.length; right++) {
            if (prices[right] > prices[left]) {
                let currProfit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, currProfit);
            } else {
                left = right;
            }
        }
        return maxProfit;
    }
}
