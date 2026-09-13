class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
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
    decode(str: string): string[] {
        const strs: string[] = [];
        let i = 0;
        while (i < str.length) {
            let j = i + 1;
            while (str[j] !== '#') {
                j++;
            }
            const length = Number(str.slice(i, j));
            i = j + 1;
            j = i + length;
            strs.push(str.slice(i, j));
            i = j;
        }
        return strs;
    }
}
