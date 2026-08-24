class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }

        let m = nums1.length, n = nums2.length;

        let mid = Math.floor((m + n) / 2);

        let left = 0, right = m;

        while (left <= right) {
            let i = Math.floor((left + right) / 2);
            let j = mid - i;

            let left1 = (
                i === 0 ?
                    -Infinity : nums1[i - 1]
            );
            let right1 = (
                i === m ? 
                    Infinity : nums1[i]
            )
            let left2 = (
                j === 0 ?
                    -Infinity : nums2[j - 1]
            )
            let right2 = (
                j === n ?
                    Infinity: nums2[j]
            )
            if (left1 <= right2 && left2 <= right1) {
                if ((m + n) % 2 !== 0) {
                    return Math.min(right1, right2);
                }
                return ((Math.max(left1, left2) + Math.min(right1, right2)) / 2);
            } else if (left1 > right2) {
                right = i - 1;
            } else {
                left = i + 1
            }
        }
        return -1
    }
}
