class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // В первом случае можно создать массив sCount, чтобы подготовить его в качестве ключа для
    // группирования анаграм. Решить можно через charAtCode(), и позже занести их в коллекцию, каждое слово, которое является анаграмой
    // будет повторять ключ, что и позволит их сгруппировать.
    // O(n) - по скорости, O(1) по памяти
    groupAnagrams(strs) {
        const map = new Map();

        for (let str of strs) {
            const sCount = new Array(26).fill(0);

            for (let char of str) {
                sCount[char.charCodeAt() - 97]++;
            }

            const key = sCount.join('#'); // сепаратор в виде '#'
            
            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values())

    }
}
