class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            maxP = 0;

        for (let r = 1; r < prices.length; r++) {
            if (prices[r] > prices[l]) {
                maxP = Math.max(
                    maxP,
                    prices[r] - prices[l]
                );
            } else {
                l = r;
            }
        }
        return maxP;
    }
}
