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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slowPointer = head, fastPointer = head;

        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        let prev = null, current = slowPointer.next;
        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        slowPointer.next = null;

        let first = head, second = prev;

        while (second !== null) {
            const current1 = first.next;
            const current2 = second.next;

            first.next = second;
            second.next = current1;

            first = current1;
            second = current2;
        }
    }
}
