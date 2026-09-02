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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        if (lists.length === 0) return null;
        while (lists.length > 1) {
            const l1 = lists.shift();
            const l2 = lists.shift();
            lists.push(this.mergeTwoLists(l1, l2))
        }
        return lists[0];
    }
    mergeTwoLists(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 !== null ? l1 : l2;

        return dummy.next;
    }
}
