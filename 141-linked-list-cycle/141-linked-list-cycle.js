/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // let slow = head
    // let fast = head
    // if(!head){
    //     return false
    // } else if (head.next == null) {
    //     return false
    // }
    // if(head.next === head){
    //     return true
    // } else {
    // while(fast !== null && slow !== null){
    //     slow = slow.next
    //     fast = fast.next.next
    //     if(slow === fast){
    //         return true
    //     }
    // }
    // }
    // return false
    let slow = head
    let fast = head
    while (fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast) {
            return true
        }
    }
    return false
};