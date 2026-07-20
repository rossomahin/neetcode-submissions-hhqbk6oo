class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums); // избавляемся от дубликатов в массиве
        let length = 0; // инициализируем переменную которая будет в ответе за хранение максимума

        // перебираем числа массива
        for (let num of nums) {
            // ищем число которое не имеет (текущее_число - 1)
            if (!numSet.has(num - 1)) {
                let streak = 1; // инициализируем с 1, чтобы учитывать первое число  очереди
                while (numSet.has(num + streak)) { // проверяем есть ли (текущее_число + последовательность)
                    streak++;
                }

                if (length < streak) length = streak; // замеряем максимум
            }
        }
        return length;
    }
}
