class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        let rightMax = -1;
        const ans = new Array(n)

        for (let i = n - 1; i >= 0; i--) {
            ans[i] = rightMax;
            rightMax = Math.max(arr[i], rightMax)
        }

        return ans;
    }
}
