class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minPrice = Infinity;
        for (let i = 0; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            if (prices[i + 1] - minPrice > 0) {
                maxProfit = Math.max(maxProfit, prices[i + 1] - minPrice);
            }
        }
        return maxProfit
    }
}
