class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let codeString = ''
        for (let i of strs) {
            codeString += i.length.toString() + '#' + i;
        }
        return codeString;
        // 4neet4code4love3you
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let len = 0; // length of encoding word
            while (str[i] >= '0' && str[i] <= '9') {
                len = len * 10 + Number(str[i]);
                i++;
            }
            i++;

            let word = str.slice(i, i + len);
            res.push(word)

            i += len;
        }
        return res
    }
}
