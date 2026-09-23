class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean;
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    buildTree(words: string[]): TrieNode {
        const root = new TrieNode();
        for (const word of words) {
            let node = root;
            for (const char of word) {
                if (!node.children.has(char)) {
                    node.children.set(char, new TrieNode());
                }
                node = node.children.get(char);
            }
            node.isEnd = true;
        }
        return root;
    }
    findWords(board: string[][], words: string[]): string[] {
        const root = this.buildTree(words);
        const result: string[] = [];

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                this.dfs(board, r, c, root, '', result);
            }
        }

        return result;
    }

    dfs(board:string [][], r:number, c: number, node: TrieNode, word: string, result: string[]) : void {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;
        if (board[r][c] === '#') return;
        if (!node.children.has(board[r][c])) return;

        const char = board[r][c]
        board[r][c] = '#';
        node = node.children.get(char);
        word += char;

        if (node.isEnd) result.push(word);
        node.isEnd = false;

        this.dfs(board, r + 1, c, node, word, result);
        this.dfs(board, r - 1, c, node, word, result);
        this.dfs(board, r, c + 1, node, word, result);
        this.dfs(board, r, c - 1, node, word, result);

        board[r][c] = char;
    }
}
