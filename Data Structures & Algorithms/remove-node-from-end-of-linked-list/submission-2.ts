/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let slowPointer = head, fastPointer = head;

        for (let i = 0; i < n; i++) {
            if (fastPointer === null) break;
            fastPointer = fastPointer.next;
        }

        if (fastPointer === null) {
            return head.next
        }

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next;
        }

        slowPointer.next = slowPointer.next.next;

        return head;
    }
}
