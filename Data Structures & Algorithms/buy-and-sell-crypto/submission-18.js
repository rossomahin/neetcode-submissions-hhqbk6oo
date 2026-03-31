class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0, maxP = 0;

        for (let r = 0; r < prices.length; r++) {
            prices[r] > prices[l]
            ? maxP = Math.max(maxP, prices[r] - prices[l])
            : l = r;
        }
        return maxP;
    }
}
