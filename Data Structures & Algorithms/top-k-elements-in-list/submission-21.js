class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // Знаю одно из решение этих задач с помощью бакетов
    topKFrequent(nums, k) {
        const count = {};
        
        // формирование двумерного массива
        const freq = Array.from({length: nums.length + 1}, () => []);


        // формируем объект по частотам, где значение частота, а ключ число
        for (let num of nums) {
            count[num] = (count[num] || 0 ) + 1;
        }

        // кладем все в массив по индексу в зависимости от их частот
        for (let num in count) {
            freq[count[num]].push(parseInt(num));
        }

        const res = [];

        for (let i = freq.length - 1; i > 0; i--) {
            for (let num of freq[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
