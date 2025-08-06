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

    function goSum(list: ListNode | null): bigint | null {

      const val = String(list?.val)

      if (list?.next === null) {
        listAddend = BigInt(listAddend + BigInt((val! + '0'.repeat(listNodeSize1))))
      } else {
        listAddend = BigInt(listAddend + BigInt((val! + '0'.repeat(listNodeSize1))))
        listNodeSize1++;

        goSum(list!.next)
      }
      return listAddend
    }

    function createListNode (_plainList: string[]): ListNode | null {
      if ( lengthOfLists > 0 ) {
        lengthOfLists--;
        l3 = new ListNode(Number(sumOfLists[lengthOfLists]), createListNode(sumOfLists))
      }
      return l3
    }

    let listNodeSize1 = 0;
    let listAddend = 0n ;
    let l3;

    const sum1 = goSum(l1)
    listNodeSize1 = 0;
    listAddend = 0n;
    const sum2 = goSum(l2)
    const sum: bigint =  sum1! + sum2!;
    const sumOfLists = (String(sum).split(''))
    let lengthOfLists = Number(sumOfLists.length)

    return createListNode(sumOfLists)
};

// const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(JSON.stringify(addTwoNumbers(l1,l2)));