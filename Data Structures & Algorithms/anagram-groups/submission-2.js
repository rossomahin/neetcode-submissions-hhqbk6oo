class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const wordMap = new Map();

        for (let word of strs) {
            const key = word.split('').sort().join('');
            if (!wordMap.has(key)) wordMap.set(key, [])
            wordMap.get(key).push(word)
        }

        return [...wordMap.values()]
    }
}
