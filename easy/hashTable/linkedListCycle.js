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
    let slowNode = head;
    let fastNode = head;

    while (fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if (slowNode === fastNode) return true;
    }
    return false;
};


// var hasCycle = function(head) {
//     const nodeMap = new Map();
//     let current = head;
//     while (current && current.next) {
//         if (nodeMap.has(current)) return true;
//         nodeMap.set(current, current.val);
//         current = current.next;
//     }
//     return false;
// };



// var hasCycle = function(head) {
//     const seen = new Set();
//     let current = head;

//     while (current) {
//         if (seen.has(current)) return true;
//         seen.add(current);
//         current = current.next;
//     }
//     return false;
// }