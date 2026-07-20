class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let maxPrice = 0;
        for (let right = 1; right < prices.length; right++) {
            if (prices[right] > prices[left]) {
                let currPrice = prices[right] - prices[left];
                maxPrice = Math.max(maxPrice, currPrice);
            } else {
                left = right;
            }
        }
        return maxPrice;
    }
}
