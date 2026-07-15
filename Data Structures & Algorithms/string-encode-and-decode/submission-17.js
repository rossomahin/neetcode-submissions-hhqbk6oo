class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // чтобы зашифровать строку можно использовать сепаратор в виде # и закладывать длину перед сепаратором
    // таким образом при декодировки строки можно заложить метод slice(i, length);
    // Такая шифровка O(n) по времени, потому что используется цикл
    // Память O(n * k) где n - строки, k - длина строк
    encode(strs) {
        let encodedString = '';
        for (let str of strs) {
            encodedString +=  str.length + '#' + str; // на выходе будет 5#Hello5#World
        }
        return encodedString
    }

    // Чтобы разшифровать строку можно использовать указатели
    // i указывает на начало строки j до сепаратора чтобы получить длину строки
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const strs = [];
        while (i < str.length) {
            let j = i + 1;
            // остановится на #, получим длину строки
            while (str[j] !== '#') {
                j++;
            }
            
            let length = Number(str.slice(i, j)); // Получение длины slice() возвращает строку без последнего указанного индекса
            i = j + 1; // смещаем i на начало строки
            j = i + length; // смещаем j в конец строки 
            strs.push(str.slice(i, j));
            i = j;
        }
        return strs;

    }
}
