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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy = new ListNode(0); // создаем манекен куда будем сохранять новый список
        let current = dummy; // будем двигать этот лист

        while (list1 !== null && list2 !== null) {
            if (list1.val > list2.val) {
                // Присоединяем к ссылке на следующее значение текущий list2 (то есть val, next)
                current.next = list2;
                // переходим на следующее значение list2
                list2 = list2.next;
                // двигаем текущий список вперед
                current = current.next;
            } else {
                current.next = list1;
                list1 = list1.next;
                current = current.next;
            }
         
        }
        current.next = list1 !== null ? list1 : list2;

        return dummy.next
    }
}
