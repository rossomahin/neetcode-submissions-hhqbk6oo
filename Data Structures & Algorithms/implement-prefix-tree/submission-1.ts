class TrieNode {
    children: Map<string, TrieNode>
    isEnd: boolean
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class PrefixTree {
    root: TrieNode
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }  
            node = node.children.get(char)!;
        }
        node.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) return false;
            node =  node.children.get(char)!;
        }
        return node.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) return false;
            node =  node.children.get(char)!;
        }
        return true;
    }
}
