class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.join('#')

            if (!map.has(key)) {
                map.set(key, [])
            }

            map.get(key).push(str)
        }

        return Array.from(map.values());
    }
}
