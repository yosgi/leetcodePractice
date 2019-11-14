/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
    let slow = head
    let cur = head
    let count = 0
    let first = head;
    for (let i = 0; i < n; i++) {
      first = first.next;
    }
    if (!first) return head.next
    while(cur.next) {
      if (count === n ) {
        slow = slow.next
      } else {
        count ++
      }
      cur = cur.next
    }
      slow.next = slow.next.next
    return head  
  };