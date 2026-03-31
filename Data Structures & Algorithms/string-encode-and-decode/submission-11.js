class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for (let str of strs) {
            encodedString += str.length + '#' + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const strs = [];

        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;

            strs.push(str.substring(i, j));
            i = j;
        }
        return strs;
    }
}
