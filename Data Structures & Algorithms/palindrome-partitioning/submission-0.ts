class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const result = [];
        function dfs(start, current) {
            if (start === s.length) {
                result.push([...current]);
            }

            for (let i = start; i < s.length; i++) {
                const sub = s.slice(start, i + 1);
                if (isPalindrome(sub)) {
                    current.push(sub);
                    dfs(i + 1, current);
                    current.pop();
                }
            }
        }
        dfs(0, []);
        return result;

        function isPalindrome(str: string) {
            let left = 0, right = str.length - 1;
            while (left < right) {
                if (str[left] !== str[right]) return false;
                left++;
                right--;
            }
            return true;
        }
    }
}
