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

        let list1 = head, list2 = prev;
        while (list2 !== null) {
            let current1 = list1.next;
            let current2 = list2.next;

            list1.next = list2;
            list2.next = current1;

            list1 = current1;
            list2 = current2;
        }
    }
}
