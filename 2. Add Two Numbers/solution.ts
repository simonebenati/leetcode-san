/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    function goSum(list: ListNode | null, listNodeSize1 = 0, listAddend: bigint = 0n): bigint | null { 
      if (list?.next !== null && list?.val !== 0) {
        listAddend = BigInt(listAddend + BigInt((list?.val! + '0'.repeat(listNodeSize1))))
        listNodeSize1++;
        return goSum(list!.next, listNodeSize1, listAddend)
      } else if (list?.next !== null && list?.val === 0) {
        listAddend = BigInt(listAddend + 0n)
        listNodeSize1++;
        return goSum(list!.next, listNodeSize1, listAddend)
      } else {
        listAddend = BigInt(listAddend + BigInt((list?.val! + '0'.repeat(listNodeSize1))))
        return listAddend
      }
    }

    function createListNode (lengthOfLists: number): ListNode | null {
      let l3;
      if ( lengthOfLists > 0 ) {
        lengthOfLists--;
        l3 = new ListNode(Number(sumOfLists[lengthOfLists]), createListNode(lengthOfLists))
      }
      return l3
    }
    
    const sumOfLists = (String(BigInt(goSum(l1)! + goSum(l2)!)).split(''))

    return createListNode(Number(sumOfLists.length))
};

// const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(JSON.stringify(addTwoNumbers(l1,l2)));