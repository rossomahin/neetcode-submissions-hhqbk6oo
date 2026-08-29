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

        let prev = null, current = slowPointer.next, next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;
        }
        slowPointer.next = null;

        let first = head, second = prev;
        while (second !== null) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
