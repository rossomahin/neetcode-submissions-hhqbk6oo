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
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
        } 
        return maxP;
    }
}
