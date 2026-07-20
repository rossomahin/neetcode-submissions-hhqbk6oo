class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const stringSet = new Set(); // чтобы проверять дубликаты
        let longest = 0;
        let left = 0;
        // использование окна помогает расширять диапазон значений уникальных символов
        // если было бы xyz а потом после этого идет еще раз zxy, то он должен стереть и текущая максимальная длина 3
        // но что если следующая строка abcd?, тогда это нужно учесть и двигать левый указатель окна к уникальным значениям
        for (let right = 0; right < s.length; right++) {
            if (stringSet.has(s[right])) {
                while (stringSet.has(s[right])) {
                    stringSet.delete(s[left]);
                    left++;
                }
            }
            stringSet.add(s[right]);
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
