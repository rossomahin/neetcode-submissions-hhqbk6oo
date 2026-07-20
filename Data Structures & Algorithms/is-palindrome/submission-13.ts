class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
     // задача на палиднром, палиндром - это когда строка читается одинаково слева направо,
    // и читается также справа налево, например: "радар", "анна"
    // можно решить 2 способами
    // сравнить перевернутую строку или идти по очередено двигая какие-то указатели сначала и с конца строки
    // в обоих способах нужно удалить знаки, мешающие нам: пробелы, знаки препинания и т.д.
    // удалить их можно с помощью reg exp, но я их не знаю, поэтому будем использовать самописный метод
    // isAlphaNum(c), сравнение строк приводит их к Unicode и если они не попадают в Unicode алфавита, то это спец. символы
    isPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaNum(s[left])) left++;
            while (left < right && !this.isAlphaNum(s[right])) right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }

        return true;
    }
    /**
     * @param {char} c
     * @return {boolean}
     */
    isAlphaNum(c: string): boolean {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
