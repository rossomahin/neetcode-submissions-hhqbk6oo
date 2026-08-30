// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (head === null) return null;
        let map = new Map();

        let current = head;
        while (current !== null) {
            map.set(current, new Node(current.val));
            current = current.next;
        }

        for (let [key, val] of map) {
            val.next = key.next ? map.get(key.next) : null;
            val.random = key.random ? map.get(key.random) : null;
        }

        return map.get(head);
    }
}
