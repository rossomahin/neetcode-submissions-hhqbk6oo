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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;
        while (l1 !== null || l2 !== null || carry > 0) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);

            l1 = l1?.next ?? null;   
            l2 = l2?.next ?? null;
            current = current.next;
        }

        return dummy.next;
    }
}
