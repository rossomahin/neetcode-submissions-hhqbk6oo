class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();

        for (let str of strs) {
            const count = new Array(26).fill(0);

            // [1, 0, 1, 0, ... 0, 0];
            for (let char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            // 1#0#1#0......0#0
            const key = count.join('#');

            if (!map.get(key)) {
                map.set(key, []);
            }

            // 1#0#1#0......0#0 : ["act", "cat"];
            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
