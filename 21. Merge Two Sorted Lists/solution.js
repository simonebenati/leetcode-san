/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let arr = new ListNode()
    while (list1.next !== null || list2.next !== null) {
        arr.push(list1.val ? list1.val : "", list2.val ? list2.val : "")
        if (list1.val) {
            arr.val = list1.val
            arr.next = new ListNode()
        }
        if (list2.val) {
            arr.val =
        }
        arr.val = list1.val
        list1 = list1.next
        list2 = list2.next
    }
    if (list1.val)
        arr.push(list1.val)
    if (list2.val)
        arr.push(list2.val)
    return arr
};

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))))
console.log(mergeTwoLists(new ListNode(), new ListNode()))