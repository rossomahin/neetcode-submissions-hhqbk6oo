class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let c of str) {
                count[c.charCodeAt(0) - 97]++;
            }

            let key = count.join('#');

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
