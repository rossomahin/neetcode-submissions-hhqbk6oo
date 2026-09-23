class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean
    constructor() {
        this.children = new Map()
        this.isEnd = false;
    }
}

class WordDictionary {
    root: TrieNode
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode()); 
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }
    dfs(word: string, i: number, node: TrieNode): boolean {
        if (i === word.length) return node.isEnd;

        const char = word[i]

        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.dfs(word, i + 1, child)) return true;
            }
            return false;
        } else {
            if (!node.children.has(char)) return false;
            return this.dfs(word, i + 1, node.children.get(char));        
        }
    }
}
