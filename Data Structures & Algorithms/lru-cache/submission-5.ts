class Node {
    key: number;
    val: number;
    next: Node | null;
    prev: Node | null;
    constructor(key: number, val: number, next = null, prev = null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    capacity: number;
    map: Map<number, Node>
    head: Node | null;
    tail: Node | null;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;

    }
    
    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    insert(node) {
        node.next = this.tail;
        node.prev = this.tail.prev;
        node.prev.next = node;
        this.tail.prev = node;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.map.has(key)) return -1;
        const curr = this.map.get(key);
        this.remove(curr);
        this.insert(curr);
        return curr.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.remove(this.map.get(key))
            this.map.delete(key);
        }

        if (this.map.size === this.capacity) {
            this.map.delete(this.head.next.key);
            this.remove(this.head.next)
        }
        let newNode = new Node(key, value);   
        this.map.set(key, newNode);
        this.insert(newNode)
    }
}
